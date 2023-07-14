const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  name: String,
  phoneNumber: String,
  profileImage: {
    type: String,
    default:
      "https://png.pngitem.com/pimgs/s/41-414549_the-face-android-face-profile-hd-png-download.png",
  },
  about: String,
});

module.exports = mongoose.model("Users", Users);
