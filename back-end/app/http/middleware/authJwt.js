const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_KEY
const StatusCode = require("../helper/status-code");


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
      }

      jwt.verify(token, jwtKey, (err, decoded) => {
        if(err){
            return res.status(401).send({message : 'Unauthorized', error : err})
        }

        console.log("Decoded token data : ", decoded)

        req.headers.userId = decoded.userId
        next()
      })
}

getUserData = (req,res,next) => {
  if(req?.body?.data){
    const userId = req.headers["userId"];
    
    User.find({ userid: userId }).exec((error, response) => {
      if(error){
        return res
        .status(StatusCode.STATUS_USER_NOT_FOUND.code)
        .send({
          message: StatusCode.STATUS_USER_NOT_FOUND.message
        });
      }

      req.body.data.userdata = response[0]

      next();
    });
  }else {
    return res
    .status(StatusCode.STATUS_BAD_REQUEST.code)
    .send({
      message: StatusCode.STATUS_BAD_REQUEST.message
    });
}
  }

module.exports = {
  verifyToken,
  getUserData
}