import { Alert, Button, Container, IconButton } from "@mui/material";
import "./register.scss";
import CustomTextField from "../../components/textfield";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/reducers/auth/auth-actions";
import { useSelector } from "react-redux";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from "../redux/action-const";
import { RegisterModel } from "./register-model";
import { useState } from "react";

const Register = (props) => {
  const dispatch = useDispatch();

  const [registerData, setRegisterData] = useState(new RegisterModel());
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const userRegisterData = useSelector((state) => {
    if (state?.AuthReducers) {
      var authData = state.AuthReducers;

      if (authData.type === USER_REGISTER_SUCCESS) {
        props.onRegisterSuccess();
        return state?.AuthReducers;
      } else if (authData.type === USER_REGISTER_FAILURE) {
        return state?.AuthReducers;
      }
    }
  });

  const onRegisterClickHandler = () => {
    if (registerData.checkValidation()) {
      setShowError(false);
      dispatch(userRegister(registerData.convertToJson()));
    } else {
      setShowError(true);
    }
  };

  const clearInputs = () => {
    registerData.fullname = "";
    registerData.email = "";
    registerData.password = "";

    setRegisterData(registerData);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputChangeHandler = (props) => (event) => {
    console.log("Event : ", event.target.value);
    let data = registerData;

    if (props === "email") {
      data.email = event.target.value;
    } else if (props === "password") {
      data.password = event.target.value;
    } else if (props === "full-name") {
      data.fullname = event.target.value;
    }

    setRegisterData(data);
  };

  return (
    <Container className="root-register-container">
      <h2>Sign up to Everyday Cravings</h2>
      <h4>Enter your details below</h4>

      <CustomTextField
        className="text-field name-field"
        variant="outlined"
        label="Full Name"
        type="text"
        position="end"
        onInputChange={inputChangeHandler("full-name")}
        isError={showError && registerData.validate()["fullname"].length > 0}
        errortext={registerData.validate()["fullname"]}
      ></CustomTextField>
      <CustomTextField
        className="text-field email-field"
        variant="outlined"
        label="Email Id"
        type="email"
        position="end"
        onInputChange={inputChangeHandler("email")}
        isError={showError && registerData.validate()["email"].length > 0}
        errortext={registerData.validate()["email"]}
      ></CustomTextField>
      <CustomTextField
        className="text-field password-field"
        variant="outlined"
        label="Password"
        type={showPassword ? "text" : "password"}
        endIconType="icon"
        position="end"
        onInputChange={inputChangeHandler("password")}
        isError={showError && registerData.validate()["password"].length > 0}
        errortext={registerData.validate()["password"]}
        endIcon={
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      ></CustomTextField>

      <Button
        className="button login-button"
        variant="contained"
        onClick={onRegisterClickHandler}
        disableElevation
      >
        Register
      </Button>

      {userRegisterData?.data?.status === "error" ? (
        <Alert className="alert-message" severity="error">
          {userRegisterData.data.message}
        </Alert>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Register;
