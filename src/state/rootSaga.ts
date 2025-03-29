import { fork } from 'redux-saga/effects';
import productSaga from './product/productSaga';

export default function* rootSaga() {
    yield fork(productSaga);
}
