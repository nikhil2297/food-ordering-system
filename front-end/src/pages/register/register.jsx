import { Button, Container, IconButton } from "@mui/material";
import "./register.scss";
import CustomTextField from "../../components/textfield";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";

const Register = () => {
  const [values, setValues] = React.useState({
    fullName : "",
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

  return (
    <Container className="root-register-container">
      <h2>Sign up to Everyday Cravings</h2>
      <h4>Enter your details below</h4>

      <CustomTextField
        className="text-field name-field"
        variant="outlined"
        label="Full Name"
        type="text"
      ></CustomTextField>
      <CustomTextField
        className="text-field email-field"
        variant="outlined"
        label="Email Id"
        type="email"
      ></CustomTextField>
      <CustomTextField
        className="text-field password-field"
        variant="outlined"
        label="Password"
        type="password"
        endIconType="icon"  
        endIcon={
          <IconButton onClick={handleClickShowPassword}>
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      ></CustomTextField>

      <Button
        className="button login-button"
        variant="contained"
        disableElevation
      >
        Login In
      </Button>
    </Container>
  );
};

export default Register;
