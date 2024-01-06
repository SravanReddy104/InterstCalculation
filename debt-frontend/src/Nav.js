import List from "./List";
import { Link } from "react-router-dom";
import { search } from "./Features/DataSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Menu from "./Menu";
const Nav = () => {
  const nameref = useRef();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const name = nameref.current.value;
    dispatch(search(name));
  };
  return (
    <div className="nav">
      <div className="menu"> <Menu /></div>
     
      <div className="sidebar">
      <div className="title">
        <h5>Users</h5>
        <input type="text" className="small" placeholder="Search Name" ref={nameref} />
        <button onClick={handleSearch} style={{padding:"0.1rem 0.1rem", border:"none", cursor:"pointer", fontWeight:"bold", fontSize:"0.5rem", borderRadius:"1rem", backgroundColor:"rgb(19, 104, 233,0.8)", color:"white", alignItems:"center"}} ><ArrowUpwardIcon/></button>
      </div>
      <Link to={"/addUser"} className="btnn">
        Add Users
      </Link>
      </div>

      <List />
    </div>
  );
};
export default Nav;
