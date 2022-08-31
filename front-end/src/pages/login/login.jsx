import { Button, Box, IconButton } from "@mui/material";
import "./login.scss";
import CustomTextField from "../../components/textfield";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from 'react';

const Login = (props) => {


  const [values, setValues] = React.useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const inputChangeHandler = (props) => (event) => {
    console.log('Event : ', event.target.value)

    if(props === 'email'){
      setValues({
        ...values,
        email: event.target.value
      })
    }else if (props === 'password') {
      setValues({
        ...values,
        password: event.target.value
      })
    }
}

const onLoginClickHandler = () => {
  props.onLoginSuccess()
}

  return (
    <Box className="root-login-container">
      <h2>Sign in to Everyday Cravings</h2>
      <h4>Enter your details below</h4>

      <CustomTextField
        className="text-field email-field"
        variant="outlined"
        id="outlined-email-input"
        label="Email Id"
        type="email"
        onInputChange={inputChangeHandler('email')}
      />

      <CustomTextField
        className="text-field password-field"
        id="outlined-password-input"
        variant="outlined"
        label="Password"
        type={values.showPassword ? "text" :"password"}
        endIconType="icon"
        onInputChange={inputChangeHandler('password')}  
        endIcon={
          <IconButton onClick={handleClickShowPassword}>
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
    </Box>
  );
};

export default Login;
