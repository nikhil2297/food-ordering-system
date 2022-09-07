require("dotenv").config();
const mongoose = require("mongoose");
const mongooseFieldEncryption =
  require("mongoose-field-encryption").fieldEncryption;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  userid: { type: String, required: true },
});

const encKey = process.env.PASSWORD_SECRET_KEY;

UserSchema.plugin(mongooseFieldEncryption, {
  fields: ["password"],
  secret: encKey,
  saltGenerator: function (secret) {
    return secret.slice(0, 16)
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
