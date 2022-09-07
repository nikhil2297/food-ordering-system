import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "../../action-const";

export const AuthReducers = (data = {}, action) => {
  console.warn("Action : ", action);
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAILURE:
      return { type: action.type, data : action?.data };
    case USER_REGISTER_SUCCESS:
    case USER_REGISTER_FAILURE:
      return { type: action.type, data :  action?.data };
    default:
      return "no data";
  }
};

//Note : We cannot call api directly from reducers. As reducers expect a plain object (no Primitive type, no promise..., So to solve this issue we have to use middleware)
