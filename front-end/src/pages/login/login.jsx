import { Button, Box, IconButton, Alert } from "@mui/material";
import "./login.scss";
import CustomTextField from "../../components/textfield";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/reducers/auth/auth-actions";
import { useSelector } from "react-redux";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from "../redux/action-const";
import { LoginModel } from "./login-model";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = React.useState(new LoginModel())
  const [showPassword, setShowPassword] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const [loginErrorMessage, setLoginErrorMessage] = React.useState("")

  const userLoginData = useSelector((state) => {
    if (state?.AuthReducers) {
      var authData = state.AuthReducers;

      if (authData.type === USER_LOGIN_SUCCESS) {
        props.onLoginSuccess();
        return state?.AuthReducers
      } else if (authData.type === USER_LOGIN_FAILURE) {
        // setLoginErrorMessage(authData.data.message)
        return state?.AuthReducers
      }
    }
  });

  const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
  };

  const inputChangeHandler = (props) => (event) => {
    console.log("Event : ", event.target.value);
    let data = loginData


    if (props === "email") {
      data.email = event.target.value
    } else if (props === "password") {
      data.password = event.target.value
    }

    setLoginData(data)
  };

  const onLoginClickHandler = () => {
    if(loginData.checkValidation()){
      setShowError(false)
    setLoginData(loginData)
      dispatch(
      userLogin(loginData.convertToJson())
    );
  }else {
    setShowError(true)
  }
  };

  return (
    <Box className="root-login-container">
      <h2>Sign in to Everyday Cravings</h2>
      <h4>Enter your details below</h4>

      <CustomTextField
        className={"text-field email-field"}
        variant="outlined"
        id="outlined-email-input"
        label="Email Id"
        type="email"
        onInputChange={inputChangeHandler("email")}
        isError={showError}
        errortext={loginData.validate()['email']}
      />

      <CustomTextField
        className="text-field password-field"
        id="outlined-password-input"
        variant="outlined"
        label="Password"
        type={showPassword ? "text" : "password"}
        endIconType="icon"
        onInputChange={inputChangeHandler("password")}
        isError={showError}
        errortext={loginData.validate()['password']}
        endIcon={
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />

      <Button
        className="button login-button"
        variant="contained"
        onClick={onLoginClickHandler}
        disableElevation
      >
        Login In
      </Button>
  
      {userLoginData?.data?.status === 'error' ? <Alert className="alert-message" severity="error">{userLoginData.data.message}</Alert> : <div></div>}
    </Box>
  );
};

export default Login;
