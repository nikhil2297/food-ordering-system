import {configureStore} from '@reduxjs/toolkit'
import rootReducers from "./reducers/root-reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./root-saga"
//Store : It is were all the data get stored. and we can retrive from it.

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootReducers,
    middleware: () => [sagaMiddleware]
})


sagaMiddleware.run(rootSaga)

export default store