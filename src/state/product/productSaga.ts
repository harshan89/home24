import { productApi } from '@/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductFailure, fetchProductSuccess } from './productState';
import { ProductMapper } from '@/mappers/ProductMapper';
import { ApiResponse } from '@/types/api';
import { GetProductDTO } from '@/dtos/product/GetProductDTO';
import { PayloadAction } from '@reduxjs/toolkit';
import { IProductRequest } from '@/types/product';

function* fetchProductRequestSaga(action: PayloadAction<IProductRequest>) {
    try {
        const urlParams = action.payload;

        const response: ApiResponse<GetProductDTO[]> = yield call(() =>
            productApi.getProductList(urlParams)
        );

        const productList = ProductMapper.toModels(response.data);

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