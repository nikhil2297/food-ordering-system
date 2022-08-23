//TODO : Move status code file to MongoDB 
const StatusCode = {
    //200
    STATUS_LOGIN_SUCESSFULL : {code : '200', message : 'User authenticated sucessfully'},
    STATUS_SIGNUP_SUCESSFULL : {code : '200', message : 'User created sucessfully'},
    STATUS_RESTURANT_ADDED : {code : '200', message : 'Resturant added sucessfully'},
    //400
    STATUS_USER_NOT_FOUND : {code : '404', message : 'User not found.'},
    STATUS_USER_LOGIN_ERROR : {code : '404', message : 'User not found. Please check your email or password or try logining again'},
    STATUS_UNAUTHORIZED : {code : '401', message : 'Unauthorized'},
    STATUS_INTERNAL_SEVER_ERROR : {code : '500', message : 'Interval server error. Please connect support'},
    STATUS_TOKEN_NOT_CREATE : {code : '400', message : 'Not able to create user session, Please connect support'},
    STATUS_BAD_REQUEST : {code : 400, message : 'Please send all the required data'}
}

module.exports = StatusCode