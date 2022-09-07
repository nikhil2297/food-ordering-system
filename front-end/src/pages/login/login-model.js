import { ValidationTools } from "../../utils/validation-tools";

export class LoginModel {
  email;
  password;
  constructor() {}

  convertToJson() {
    return {
      email: this.email,
      password: this.password,
    };
  }

  validate() {
    let validation = {};

    validation["email"] = ValidationTools.isEmail(this.email)
      ? ""
      : "Please enter a valid email";
    validation["password"] = ValidationTools.minLengthValidation(this.password,4)
        ? ValidationTools.maxLengthValidation(this.password,20)
          ? ""
          : "Maximum password length should be 20"
        : "Minimum password length should be 4"

    console.warn("Login validate : ", validation)

    return validation;
  }

  checkValidation() {
    const validation = this.validate();

    return validation["email"] === "" && validation["password"] === "";
  }
}
