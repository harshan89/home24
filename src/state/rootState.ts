import { combineReducers } from 'redux';
import productSliceReducer, { IProductSlice } from './product/productState';

export interface IRootState {
    productReducer: IProductSlice;
}

const rootReducer = combineReducers({
    product: productSliceReducer,
});

export default rootReducer;
