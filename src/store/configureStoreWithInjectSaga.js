import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


function createSagaInjector(runSaga, rootSaga) {
    const injectedSagas = new Map();
    const isInjected = key => injectedSagas.has(key);
    const injectSaga = (key, saga) => {
        if (isInjected(key)) {
            return;
        }
        const task = runSaga(saga);
        injectedSagas.set(key, task);
    };
    const ejectSaga = key => {
        const task = injectedSagas.get(key);
        if (task.isRunning()) {
            task.cancel();
        }
        injectedSagas.delete(key);
    };
    injectSaga('root', rootSaga);
    return { injectSaga, ejectSaga };
}


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, thunk)
));


sagaMiddleware.run(rootSaga);
Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga))

