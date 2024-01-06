const router = require("express").Router();
const userModel = require("../Models/userModel");
const user = require("../Models/userModel");

sendData = async (req, res) => {
  const data = req.body;
  console.log(data);

  console.log("in get data");
  try {
    const response = await userModel.create(data);
    console.log(response);
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};
sendDataMany = async (req, res) => {
  const data = [{ username: "Nakka Raju", amount: 50000, date: '2023/8/14' },{ username: "Kukatla Ilaiah", amount:100000 , date: '2023/7/20' }
  ,{ username: "Yatala Raju", amount: 50000, date: '2023/5/10'}
  ,{ username: "Somarapally Balraju", amount: 50000, date: '2023/2/22'}
  ,{ username: "Somarapally Balraju", amount: 150000, date: '2023/2/22'}
  ,{ username: "chakala Baliah", amount: 100000, date: '2022/9/27'}
  ,{ username: "Yatala Shankar", amount: 30000, date: '2023/10/21'}
  ,{ username: "Ponnala Shankar", amount: 100000, date: '2023/10/16'}
  ,{ username: "Ragula Kanikiah smp", amount: 50000, date: '2023/4/3'}
  ,{ username: "Myakala Raji Reddy", amount: 30000, date: '2023/1/8'}
  ,{ username: "Myakala Raji Reddy", amount: 50000, date: '2022/11/11'}
  ,{ username: "Ragula Sampath", amount: 50000, date: '2023/1/1'}
  ,{ username: "Velpula Sathish", amount: 70000, date: '2023/1/1'}
  ,{ username: "Mettu Bapi Reddy", amount: 20000, date: '2023/3/5'}
  ,{ username: "Vatee Narsiah", amount: 20000, date: '2023/9/15'}
  ,{ username: "Ragula Chandriah smp", amount: 50000, date: '2022/12/22'}
  ,{ username: "Kukatla Anil", amount: 100000, date: '2023/10/5'}
  ,{ username: "Dayyala Mahendar", amount: 100000, date: '2022/10/18'}
  ,{ username: "Mangal Rajesham", amount: 30000, date: '2023/3/14'}
  ,{ username: "Jaligam Maliah sakali", amount: 50000, date: '2022/11/30'}
  ,{ username: "Ragula Ramaswamy", amount: 100000, date: '2023/9/10'}
  ,{ username: "Yatala Lingiah", amount: 50000, date: '2023/7/5'}
  ,{ username: "Myakala Srinivas Reddy", amount: 50000, date: '2023/11/19'}
  ,{ username: "Yatala Baliah", amount: 15000, date: '2023/1/27'}
  ,{ username: "Mutha Komriah", amount: 10000, date: '2023/3/17'}
  ,{ username: "Methuku Madhava Reddy", amount: 30000, date: '2023/8/12'}
  ,{ username: "Koheda Yellaih", amount: 10000, date: '2023/5/9'}
  ,{ username: "Kothi Rajiah", amount: 25000, date: '2022/12/25'}
  ,{ username: "Smp Raju", amount: 36000, date: '2023/9/9'}
  ,{ username: "ponnala Shankar", amount: 20000, date: '2022/12/22'}

];


  console.log(data);

  console.log("in get data");
  try {
    const response = await userModel.insertMany(data);
    console.log(response);
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};
router.post("/", sendData);
router.get("/many", sendDataMany);

module.exports = router;
