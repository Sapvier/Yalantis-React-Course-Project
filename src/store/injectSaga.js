import { useEffect } from 'react';
import { store } from './configureStoreWithInjectSaga';

export const useInjectSaga = (key, saga) => {
    useEffect(() => {
        store.injectSaga(key, saga);

        console.log(key, 'injected');
        return () => {
            store.ejectSaga(key);
            console.log(key, 'ejected');
        };
    }, [key, saga]);
};