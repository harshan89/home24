import { combineReducers } from 'redux';
import productSliceReducer, { IProductSlice } from './product/productState';
import userSliceReducer, { IUserSlice } from "./user/userState"

export interface IRootState {
    productReducer: IProductSlice;
    userSliceReducer: IUserSlice
}

const rootReducer = combineReducers({
    productReducer: productSliceReducer,
    userReducer: userSliceReducer
});

export default rootReducer;
