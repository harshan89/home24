import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '../rootState';
import { ISerializedProduct } from '@/models/product/IProduct';

export interface IProductSlice {
    productList: ISerializedProduct[] | null;
    isLoading: boolean;
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productList: null,
        isLoading: false
    } as IProductSlice,
    reducers: {
        fetchProductRequest: (state) => {
            state.isLoading = true;
        },
        fetchProductSuccess: (state, action: PayloadAction<ISerializedProduct[]>) => {
            const serializedProductList = action.payload;
            state.productList = serializedProductList;
            state.isLoading = false;
        },
        fetchProductFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const productListSelector = (state: IRootState) => state.productReducer.productList

export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;
