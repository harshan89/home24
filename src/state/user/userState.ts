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
            state.username = action.payload.username
            action.payload.notify!({
                type: "success",
                message: "Login successful!"
            })
        },
        loginFailure: (state, action: PayloadAction<ILoginRequest['notify']>) => {
            action.payload!({
                type: "error",
                message: "Enter correct credentials",
                description: "Username: admin - Password: 123"
            })
            state.isLoading = false;
        }
    }
});

export const userNameSelector = (state: IRootState) => state.userReducer.username
export const isLoadingSelector = (state: IRootState) => state.userReducer.isLoading

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
} = UserSlice.actions;

export default UserSlice.reducer;
