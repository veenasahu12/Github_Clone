import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getapi, getfollowerapi } from "../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import "./All.css";
import Pagination from "./Pagination";

const Homepage = (props) => {
  const itemLimit = 3;
  const Items = []
  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curPage, setCurPage] = useState(0);

 

  const handlePageChange = (page) => {
    setCurPage(page);
  };
  const [sortdata, setSortData] = useState([]);
  const [search, setSearch] = useState(() => {
    // getting stored value
    return localStorage.getItem("username") || "";
  });

  const dispatch = useDispatch();
  let data = useSelector((state) => state.data);
  const followersdata = useSelector((state) => state.followers_data);
  console.log(data, followersdata);
  useEffect(() => {
    if (search) {
      dispatch(Getapi(search));
      dispatch(getfollowerapi(search));
    }
  }, [dispatch, search]);

  useEffect(() => {
    const pagesTotal = Math.ceil(Items?.length / itemLimit);
    console.log(pagesTotal,"pagesTotal")
    setPagesQuantity(pagesTotal);
  },[data.length])
  const HandleSubmit = () => {
    localStorage.setItem("username", search);
    dispatch(Getapi(search));
    dispatch(getfollowerapi(search));
  };
  const navigate = useNavigate();
  const navigateById = (event) => {
    navigate(`${event.id}`, { state: event });
  };
  console.log(search);

  const handleSort = (e) => {
    if(e === "Low" || e === "High"){
        let data1 = data.sort((a,b) => {
            if(e === "Low"){
                return a.created_at - b.created_at;
            }
            else if(e === "High"){
                return b.created_at - a.created_at;
            }
        })
        console.log(data1)
       setSortData([...data1]);
    }
}

  return (
    <div>
      <input
        placeholder="searchbar"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={HandleSubmit}>Submit</button>

      <div className="data-items">
        <h2>UserName : {search}</h2>
        <img
          className="userimg"
          src={data[0]?.owner?.avatar_url}
          alt="avatar_url"
        />
        <h3><Link to="/followers">Followers : {followersdata?.length} </Link></h3>
      </div>
      <select className="filter" onChange={(e) => handleSort(e.target.value)}>
        <option value="Featured">Sort By Creation_Time</option>
        <option value="Low">Age: Low - High</option>
        <option value="High">Age: High - Low</option>
      </select>


      <div className="mapping-data">
        {data?.map((e) => {
          return (
            <div key={e.id} className="data-item">
              <h3>Name : {e.name}</h3>
              <h3>Description : {e.description || "Null"}</h3>
              <h3>created_at : {e.created_at}</h3>
              <h3>visibility : {e.visibility}</h3>
              <button onClick={() => navigateById(e)}> View More </button>
            </div>
          );
        })}
      </div>
      <Pagination handlePageChange={handlePageChange} pagesQuantity={pagesQuantity}/>
    </div>
  );
};

export default Homepage;
