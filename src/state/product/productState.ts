import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '../rootState';
import { ISerializedProduct } from '@/models/product/IProduct';
import { IProductRequest } from '@/types/product';
import { getSubCategoryIds } from '@/utils/categoryList';

export interface IProductSlice {
    productList: ISerializedProduct[] | null;
    productListBackup: ISerializedProduct[] | null;
    isLoading: boolean;
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productList: null,
        productListBackup: null,
        isLoading: false
    } as IProductSlice,
    reducers: {
        fetchProductRequest: (state, action: PayloadAction<IProductRequest>) => {
            state.isLoading = true;
        },
        fetchProductSuccess: (state, action: PayloadAction<ISerializedProduct[]>) => {
            const serializedProductList = action.payload;
            state.productList = serializedProductList;
            state.productListBackup = serializedProductList;
            state.isLoading = false;
        },
        fetchProductFailure: (state) => {
            state.isLoading = false;
        },
        filterProductByCategoryId: (state, action: PayloadAction<number>) => {
            const selectedCategoryId = action.payload;
            state.productList = state.productListBackup;
            const subCategoryIds = getSubCategoryIds(selectedCategoryId);
            console.log(subCategoryIds)
            state.productList = state.productList?.filter(product => [...subCategoryIds, selectedCategoryId].includes(product.category.id)) || [];
        }
    }
});

export const productListSelector = (state: IRootState) => state.productReducer.productList
export const productLoadingSelector = (state: IRootState) => state.productReducer.isLoading

export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    filterProductByCategoryId,
} = ProductSlice.actions;

export default ProductSlice.reducer;
