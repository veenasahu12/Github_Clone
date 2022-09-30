import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import UserDetails from "./Components/UserDetails";
import FollowersPage from "./Components/FollowersPage";

const AllRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/:id" element={<UserDetails/>} />
        <Route path="/followers" element={<FollowersPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
