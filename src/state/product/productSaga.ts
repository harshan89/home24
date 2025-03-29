import { productApi } from '@/api';
import IProduct from '@/models/product/IProduct';
import { ApiResponse } from '@/types/api';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchProductFailure, fetchProductSuccess } from './productState';

function* fetchProductRequestSaga() {
    try {
        const response: ApiResponse<IProduct[]> = yield call(() =>
            productApi.getProductList(0, 5)
        );
        if (response) {
            yield put(fetchProductSuccess(response.data));
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