const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name : String,
  business : String,
  googleId : String,
  googleAccessToken : String,
  googleRefreshToken : String,
  googleEemail : String,
  outlookId : String,
  outlookAccessToken : String,
  outlookRefreshToken : String,
  outlookEmail : String,
  phone : String,
  admin : { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
