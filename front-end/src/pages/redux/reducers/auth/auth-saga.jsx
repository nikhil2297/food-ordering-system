import {USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS} from "../../action-const"
import { call, put, takeEvery } from 'redux-saga/effects'

// * is called as generator function use for async task
function* userLoginSaga(action) {
    try {
        let requestBody = {
            data : action.data
        }
        let response = yield call(fetch,'http://localhost:3301/login', {
            method : 'POST',
            body: JSON.stringify(requestBody),
            headers: {'Content-Type':'application/json'},
        })
        const responseBody = yield response.json();

        console.warn('User Login saga : ', responseBody)
        if(responseBody.status === 'success') {
            yield put({type: USER_LOGIN_SUCCESS, data: responseBody})   
        }else {
            yield put({type : USER_LOGIN_FAILURE, data : responseBody})
        }

    } catch (error) {
        yield put({type : USER_LOGIN_FAILURE, data : error})
    }
}

function* userRegisterSaga(action) {
    try {
        let requestBody = {
            data : action.data
        }

        let response = yield call(fetch,'http://localhost:3301/register', {
            method : 'POST',
            body: JSON.stringify(requestBody),
            headers: {'Content-Type':'application/json'},
        })

        const responseBody = yield response.json();

        console.warn('User Login saga : ', responseBody)
        if(responseBody.status === 'success') {
            yield put({type: USER_REGISTER_SUCCESS, data: responseBody})   
        }else {
            yield put({type : USER_REGISTER_FAILURE, data : responseBody})
        }

    } catch (error) {
        yield put({type : USER_REGISTER_FAILURE, data : error})
        
    }
}

export const watchUserLogin = function* () {
    yield takeEvery(USER_LOGIN, userLoginSaga)
}

export const watchUserRegister = function* () {
    yield takeEvery(USER_REGISTER, userRegisterSaga)
}