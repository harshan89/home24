import { combineReducers } from 'redux';
import productSliceReducer, { IProductSlice } from './product/productState';
import userSliceReducer, { IUserSlice } from "./user/userState"
import categorySlideReducer, { ICategorySlice } from "./category/categoryState"

export interface IRootState {
    productReducer: IProductSlice;
    userReducer: IUserSlice
    categoryReducer: ICategorySlice
}

const rootReducer = combineReducers({
    productReducer: productSliceReducer,
    userReducer: userSliceReducer,
    categoryReducer: categorySlideReducer
});

export default rootReducer;
