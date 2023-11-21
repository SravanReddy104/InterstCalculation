const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  username:String,
  amount:Number,
  date:Date

},
{timestamps:true}
)
module.exports = mongoose.model("debtdata",userSchema)