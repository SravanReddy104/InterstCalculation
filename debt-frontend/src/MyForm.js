import React, { useState } from "react";
import axios from "./Axios"
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate = useNavigate();
  const [Err,setErr] = useState("")
  const [msg,setmsg] = useState("")

  const [formData, setFormData] = useState({
    username: "",
    amount: "",
    date:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setmsg("")
    setErr("")
    if(formData["username"]==="" || formData["amount"]==="" || formData["date"]===""){
      setErr("Please Enter All Details")
    }
    else{
          const response =  await axios.post("/sendData/",formData)
          if(response.status === 200){
            setmsg("Successfully Added")
            setTimeout(() => {
              navigate("/")
            }, 7000);
          }   
    }

  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="inputBox">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="inputBox">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <br/>
      <div className="inputBox">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <br />
      <button className="submit" type="submit">Submit</button>
      <br />
      <div className="msg"> {msg}{Err}</div>
     
    </form>
  );
};

export default MyForm;
