import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '../rootState';
import { ISerializedProduct } from '@/models/product/IProduct';
import { IProductRequest } from '@/types/product';
import { getSubCategoryIds } from '@/utils/categoryList';
import { IProductSerializedUnion } from '@/models/product/createProductModelHelper';

export interface IProductSlice {
    productList: ISerializedProduct[] | null;
    productListBackup: ISerializedProduct[] | null;
    lastModifiedProduct: ISerializedProduct | null;
    isLoading: boolean;
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productList: null,
        productListBackup: null,
        lastModifiedProduct: null,
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
            state.productList = state.productList?.filter(product => [...subCategoryIds, selectedCategoryId].includes(product.category.id)) || [];
        },
        updateProduct: (state, action: PayloadAction<Partial<ISerializedProduct>>) => {
            const updatedProduct = action.payload;
            state.productList = state.productList?.map(product => {
                if (product.id === updatedProduct.id) {
                    product.name = updatedProduct.name || product.name;
                    product.description = updatedProduct.description || product.description
                    state.lastModifiedProduct = product;
                    return product
                }
                else {
                    return product
                }
            }) || []
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.productList = state.productList?.filter(product => product.id !== action.payload) || []
        }
    }
});

export const productListSelector = (state: IRootState) => state.productReducer.productList
export const lastModifiedProductSelector = (state: IRootState) => state.productReducer.lastModifiedProduct
export const productLoadingSelector = (state: IRootState) => state.productReducer.isLoading

export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    filterProductByCategoryId,
    updateProduct,
    deleteProduct
} = ProductSlice.actions;

export default ProductSlice.reducer;
