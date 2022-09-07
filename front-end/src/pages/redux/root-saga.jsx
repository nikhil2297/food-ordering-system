import { all, fork } from "redux-saga/effects";
import * as authSaga  from "./reducers/auth/auth-saga"

export default function* rootSaga() {
    yield all(
        [...Object.values(authSaga)].map(fork)
    )
}