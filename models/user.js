const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),

  User = new Schema({
    username: String,
    password: {
      type: String,
      select: false
    },
    firstName: String,
    lastName: String
  })

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
