import { productApi } from '@/api';
import IProduct from '@/models/product/IProduct';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchProductFailure, fetchProductSuccess } from './productState';

function* fetchProductRequestSaga() {
    try {
        const productList: IProduct[] = yield call(() =>
            productApi.getProductList(0, 5)
        );

        if (productList) {
            yield put(fetchProductSuccess(productList.map(product => product.serialize())));
        } else {
            yield put(fetchProductFailure());
        }

    } catch (error) {
        console.error('Product list fetch Error', error);
    }
}

function* ProductSaga() {
    yield takeEvery('product/fetchProductRequest', fetchProductRequestSaga);
}

export default ProductSaga;