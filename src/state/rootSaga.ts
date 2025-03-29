import { fork } from 'redux-saga/effects';
import productSaga from './product/productSaga';
import userSaga from './user/userSaga'

export default function* rootSaga() {
    yield fork(productSaga);
    yield fork(userSaga);
}
