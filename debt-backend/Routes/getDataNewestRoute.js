const router = require("express").Router();
const user = require("../Models/userModel");

getDataNew = async (req, res) => {
  console.log("in get data Asc");
  try{
  const data = await user.find({}).sort({date:-1}) ;
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};
getDataAmountLow = async (req, res) => {
  console.log("in get data Asc");
  try{
  const data = await user.find({}).sort({amount:1}) ;
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};


router.get("/", getDataNew);
router.get("/amount",getDataAmountLow)
module.exports = router;
