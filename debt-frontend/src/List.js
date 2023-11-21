import Cards from "./Cards";
import { useEffect } from "react";
import { getData,loading } from "./Features/DataSlice";
import { useSelector, useDispatch } from "react-redux";
const List = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const data = useSelector((state) => state.data.data);
  const err = useSelector((state) => state.data.err);

  
  return (
    <div className="container">
      <div style={{textAlign:"center", fontWeight:"bolder", marginBottom:"2%"}}>{err}</div>
      <div className="cards">
        {data.map((user, key) => (
          <Cards
            key={key}
            username={user.username}
            amount={user.amount}
            date={user.date}
            _id={user._id}
          />
        ))}
      </div>
    </div>
  );
};
export default List;
