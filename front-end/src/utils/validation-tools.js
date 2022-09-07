export class ValidationTools {
    static isEmail(email) {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return regex.test(email)
    }

    static passwordValidation(password) {
        var regex=  /^[A-Za-z]\w{7,14}$/;
        
        return regex.test(password);
    }

    static regexValidation(inputString, regex) {
        return regex.test(inputString)
    }

    static minLengthValidation(inputString, minLength) {
        return inputString && inputString.length > minLength
    }

    static maxLengthValidation(inputString, maxLength) {
        return inputString && inputString.length < maxLength
    }
}