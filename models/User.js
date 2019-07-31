let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  sessionid: String,
  username: String,
  password: String,
  email: String,
  firstname: String,
  lastname: String,
  address: String,
  city: String,
  state: String,
  zip: String
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
