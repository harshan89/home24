import { takeEvery, put, call } from 'redux-saga/effects';
import { useRouter } from 'next/router';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginRequest, ILoginResponse } from '@/types/user';
import { userApi } from '@/api';
import { loginFailure, loginSuccess } from './userState';
import { ApiResponse } from '@/types/api';

function* loginRequestSaga(action: PayloadAction<ILoginRequest>) {
    try {
        const navigator = action.payload.navigator;
        delete action.payload.navigator;
        const bodyParams = action.payload;

        const response: ApiResponse<ILoginResponse> = yield userApi.loginRequest(bodyParams);

        if (response.success) {
            yield put(loginSuccess(response.data));
            yield call(navigator.push('product'));
        }
        else {
            // TODO: error notification
        }
    } catch (error) {
        console.log(error)
        yield put(loginFailure());
    }
}

// function* redirectAfterLogin() {
//     const router = yield call(useRouter);
//     yield call([router, router.push], '/product');
//     console.log('came here');
// }

function* userSaga() {
    yield takeEvery("user/loginRequest", loginRequestSaga);
}

export default userSaga;