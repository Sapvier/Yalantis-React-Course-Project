import { useEffect } from 'react';
import { store } from './configureStoreWithInjectSaga';

export const useInjectSaga = (key, saga) => {
    useEffect(() => {
        store.injectSaga(key, saga);

        return () => {
            store.ejectSaga(key);
        };
    }, [key, saga]);
};