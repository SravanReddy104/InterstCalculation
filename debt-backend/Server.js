const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")

const app = express()

const getDataRoute = require("./Routes/getDataRoute");
const sendDataRoute = require("./Routes/sendDataRoute")
const deleteRoute = require("./Routes/deleteRoute")
const userModel = require("./Models/userModel")
const getDataAsc = require("./Routes/getDataNewestRoute")
const getDataDesc = require("./Routes/getDataoldRoute")

app.use(express.json());

app.use(cors())
// app.use(express.static(path.join(__dirname,"./build")))
require('dotenv').config()
mongoose.connect(
    process.env.URL,
  ).then((e)=>{
    console.log("connection success")
  }).catch((err)=>{console.log(err)});
app.use("/getData", getDataRoute);
app.use("/getDataNew", getDataAsc);
app.use("/getDataNew/amount", getDataAsc);
app.use("/sendData",sendDataRoute)
app.use("/delete",deleteRoute)
app.use("/getDataOld",getDataDesc)
app.use("/getDataOld/amount",getDataDesc)


app.listen(9000,()=>{
    console.log("server is listening")
})
