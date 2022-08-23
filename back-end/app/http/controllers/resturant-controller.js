require("dotenv").config();
const Resturant = require("../../models/resturant");
const User = require("../../models/user");
const StatusCode = require("../helper/status-code");

function ResturantController() {
  return {
    async getNearbyResturant(req, res) {
      const body = req?.body?.data;
      const userId = req.headers["userId"];   
    
      Resturant.find({})      

    },

    addResturant(req, res) {
        const body = req?.body?.data;
        const userId = body.userData.userid;
        let resturantId = mongoose.Types.ObjectId();

        const resturantData = new Resturant({
            name : body.name,
            city : body.city,
            country : body.country,
            locality : body.locality,
            logitude : body.logitude,
            latitude : body.latitude,
            cuisines : body.cuisines,
            isDelivery : body.isDelivery,
            start_time : body.start_time,
            end_time : body.end_time,
            userid : userId,
            resturant_id : resturantId
        })

        resturantData.save().then(
            (data) => {
                return res
                .status(StatusCode.STATUS_RESTURANT_ADDED.code)
                .send({
                  message: StatusCode.STATUS_RESTURANT_ADDED.message,
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
    }
  };
}

module.exports = ResturantController;
