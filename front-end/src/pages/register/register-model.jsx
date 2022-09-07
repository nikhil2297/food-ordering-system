import { ValidationTools } from "../../utils/validation-tools";

export class RegisterModel {
    fullname;
    email;
    password;
    constructor() {}

    convertToJson() {
      return {
        name : this.fullname,
        email: this.email,
        password: this.password,
      };
    }
  
    validate() {
      let validation = {};
  
      validation["email"] = ValidationTools.isEmail(this.email)
        ? ""
        : "Please enter a valid email";
      validation["password"] = 
        ValidationTools.minLengthValidation(this.password,4)
          ? ValidationTools.maxLengthValidation(this.password,20)
            ? ""
            : "Maximum password length should be 20"
          : "Minimum password length should be 4"
  
        validation["fullname"] = ValidationTools.regexValidation(this.fullname, /^[a-zA-Z]+ [a-zA-Z]+$/) ? "" : "Please enter a valid Full name"

      return validation;
    }
  
    checkValidation() {
      const validation = this.validate();
  
      return validation['fullname']=== "" && validation["email"] === "" && validation["password"] === "";
    }
}