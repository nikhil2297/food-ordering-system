const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResturantSchema = new Schema({
    name : {type : String, required : true},
    city : {type : String, required : true},
    country : {type : String, required : true},
    locality : {type : String, required : true},
    logitude : {type : Number, required : true},
    latitude : {type : Number, required : true},
    cuisines : {type : String, required: true},
    isDelivery  : {type : Boolean, required: true},
    start_time : {type : Number, required : true},
    end_time : {type : Number, required : true},
    photo_url : { data: Buffer, contentType: String },
    resturant_id : {type : String, required : true},
    userid : {type : String, required : true}
})

const Resturant = mongoose.model('resturant', ResturantSchema);

module.exports = Resturant