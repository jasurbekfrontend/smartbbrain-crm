import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import CreateGroup from "../CreateGroup/CreateGroup";
import Groups from "../Groups/Groups";
import GroupDetails from "../GroupDetails/GroupDetails";

const Main = () => {
  const [detailId, setDetailId] = useState();
  console.log(detailId);
  return (
    <div className="mainWrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Groups setDetailId={setDetailId} />} />
        <Route path="/creategroup" element={<CreateGroup />} />
        <Route path="/:id" element={<GroupDetails />} />
      </Routes>
    </div>
  );
};

export default Main;
