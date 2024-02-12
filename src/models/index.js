const User = require("./User");
const EmailCode = require("./emailCode");

//EmailCode -> userId
EmailCode.belongsTo(User) //userId
User.hasMany(EmailCode)