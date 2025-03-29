import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { AnyAction } from 'redux-saga';
import rootReducer from './rootState';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(saga),
    devTools: process.env.NODE_ENV !== 'production',
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const storeDispatch = (action: AnyAction) => {
    store.dispatch(action);
};
export default store;