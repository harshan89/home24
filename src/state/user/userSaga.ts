import { takeEvery, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginRequest, ILoginResponse } from '@/types/user';
import { userApi } from '@/api';
import { loginFailure, loginSuccess } from './userState';
import { ApiResponse } from '@/types/api';
import { saveToken } from '@/utils/localStorageHelper';

function* loginRequestSaga(action: PayloadAction<ILoginRequest>) {
    try {
        const navigator = action.payload.navigator;
        delete action.payload.navigator;
        const bodyParams = action.payload;

        const response: ApiResponse<ILoginResponse> = yield userApi.loginRequest(bodyParams);

        try {
            if (response.success) {
                saveToken(response.data.username);
                const successData = response.data
                successData.notify = action.payload.notify
                yield put(loginSuccess(response.data));
                yield call(navigator.push('product'));
            }
        }
        catch (error) { }

    } catch {
        yield put(loginFailure(action.payload.notify));
    }
}

function* userSaga() {
    yield takeEvery("user/loginRequest", loginRequestSaga);
}

export default userSaga;