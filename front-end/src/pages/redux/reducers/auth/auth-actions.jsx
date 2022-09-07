/**
 * Action
 * Type Key : This key should be unique. So the it decides which reducer should be called
 * How To call action : UseDispatch Hook
 */

import { USER_LOGIN, USER_REGISTER } from "../../action-const";

export const userLogin = (data) => {
    console.warn("User login called")
  return {
    type: USER_LOGIN,
    data,
  };
};

export const userRegister = (data) => {
  data['userType'] = "user"
  return {
    type: USER_REGISTER,
    data,
  };
};
