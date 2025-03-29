import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../rootState';
import { ICategory } from '@/models/category/ICategory';
import { categoryList, formattedCategoryList } from '@/utils/categoryList';

export interface ICategorySlice {
    categoryList: ICategory[];
    isLoading: boolean;
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryList: categoryList,
        isLoading: false
    } as ICategorySlice,
    reducers: {
        categoryRequest: (state) => {
            const categoryList = formattedCategoryList();
            state.categoryList = categoryList;
        }
    }
});

export const categoryListSelector = (state: IRootState) => state.categoryReducer.categoryList

export const { categoryRequest } = CategorySlice.actions;

export default CategorySlice.reducer;
