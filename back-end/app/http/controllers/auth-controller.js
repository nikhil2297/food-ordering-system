require("dotenv").config();
const User = require("../../models/user");
const mongoose = require("mongoose");
const StatusCode = require("../helper/status-code");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

function AuthController() {
  return {
    login(req, res) {
      if (req?.body?.data) {
        const body = req.body.data;
        const userData = new User({
          email: body.email,
          password: body.password,
        });
        userData.encryptFieldsSync();

        User.find({ email: userData.email, password: userData.password }).exec(
          (error, response) => {
            if (error) {
              res.status(500).send(error);
            } else {
              if (response && response.length > 0) {
                jwt.sign(
                  {
                    name: response[0].name,
                    email: response[0].email,
                    userid: response[0].userid,
                  },
                  jwtKey,
                  (err, token) => {
                    // {expiresIn : '20s'},

                    if (err) {
                      return res
                        .status(StatusCode.STATUS_TOKEN_NOT_CREATE.code)
                        .send({
                          message: StatusCode.STATUS_TOKEN_NOT_CREATE.message,
                          status: "error",
                        });
                    }

                    return res
                      .status(Status.STATUS_LOGIN_SUCESSFULL.code)
                      .send({
                        message: StatusCode.STATUS_LOGIN_SUCESSFULL.message,
                        status: "sucess",
                        data: {
                          name: response[0].name,
                          email: response[0].email,
                          userid: response[0].userid,
                          access: token,
                        },
                      });
                  }
                );
              } else {
                res.status(StatusCode.STATUS_USER_LOGIN_ERROR.code).send({
                  message: StatusCode.STATUS_USER_LOGIN_ERROR.message,
                  status: "error",
                });
              }
            }
          }
        );
      }
    },

    register(req, res) {
      let userid = mongoose.Types.ObjectId();

      if (req?.body?.data) {
        req.body.data["userid"] = userid.toString();
        const body = req.body.data;
        const userData = new User({
          name: body.name,
          email: body.email,
          password: body.password,
          userType: body.userType,
          userid: body.userid,
        });
        userData
          .save()
          .then(
            (data) => {
              return res
                .status(StatusCode.STATUS_SIGNUP_SUCESSFULL.code)
                .send({
                  message: StatusCode.STATUS_SIGNUP_SUCESSFULL.message,
                  data: data,
                });
            },
            (err) => {
              return res
                .status(StatusCode.STATUS_BAD_REQUEST.code)
                .send({
                  message: err?.message
                    ? err.message
                    : StatusCode.STATUS_BAD_REQUEST.message,
                  error: err,
                });
            }
          )
          .catch((err) => {
            return res
              .status(StatusCode.STATUS_INTERNAL_SEVER_ERROR.code)
              .send({
                message: StatusCode.STATUS_INTERNAL_SEVER_ERROR.message,
                error: err,
              });
          });
      } else {
        return res
          .status(StatusCode.STATUS_BAD_REQUEST.code)
          .send({ message: StatusCode.STATUS_BAD_REQUEST.message });
      }
    },

    getAllUser(req, res) {
      res.send("Authentication working");
    },
  };
}

module.exports = AuthController;
