import List from "./List";
import { Link } from "react-router-dom";
import { getDataAsc, search } from "./Features/DataSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
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
      <Menu />
      <div className="title">
        <h3>Users</h3>
        <input type="text" placeholder="Enter Name to Search" ref={nameref} />
        <button onClick={handleSearch} style={{padding:"0.5rem 0.5rem", border:"none", fontWeight:"bold", fontSize:"1rem", borderRadius:"1rem", backgroundColor:"rgb(19, 104, 233,0.8)", color:"white"}} >submit</button>
      </div>
      <Link to={"/addUser"} className="btnn">
        Add Users
      </Link>

      <List />
    </div>
  );
};
export default Nav;
