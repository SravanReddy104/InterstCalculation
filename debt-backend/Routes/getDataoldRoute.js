const router = require("express").Router();
const user = require("../Models/userModel");

getDataOld = async (req, res) => {
  console.log("in get data Asc");
  try{
  const data = await user.find({}).sort({date:1}) ;
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};
getDataAmountHigh = async (req, res) => {
  console.log("in get data Asc");
  try{
  const data = await user.find({}).sort({amount:-1}) ;
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};

router.get("/", getDataOld);
router.get("/amount", getDataAmountHigh);

module.exports = router;
