import "./App.css";
import axios from "./Axios"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
const Cards = ({ username, date, amount, _id }) => {
  const navigate = useNavigate()
  // const [Reload,setReload] = useState(true)
  var da = new Date(date)
  const handleDelete = async()=>{
    if(window.confirm("Do You want to delete the User")){
    const response = await axios.post("/delete",{_id})
    console.log(response.status)
    if(response.status === 200){
      window.location.reload(true)
    }
  }
}
  const handelNavigate = ()=>{
    navigate("/details",{
      state:{
        username,date,amount
      }
    })
  }

console.log("id",_id)
  
  return (
    <div style={{display:"grid", gridTemplateColumns:"80% 15%"}}>
      <div className="card" onClick={handelNavigate}>
      <div className="name">{username}</div>
      <div className="amount">{da.toLocaleDateString()}</div>
      <div className="date">{amount}</div>
    </div>
     <div className="btn" onClick={handleDelete}>Delete</div>
    </div>
  );
};
export default Cards;
