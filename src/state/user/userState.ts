import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '../rootState';
import { ILoginRequest, ILoginResponse } from '@/types/user';

export interface IUserSlice {
    username: string;
    isLoading: boolean;
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        isLoading: false
    } as IUserSlice,
    reducers: {
        loginRequest: (state, action: PayloadAction<ILoginRequest>) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action: PayloadAction<ILoginResponse>) => {
            // state.username = action.payload.username
            console.log(action.payload)
        },
        loginFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const productListSelector = (state: IRootState) => state.productReducer.productList

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
} = UserSlice.actions;

export default UserSlice.reducer;
