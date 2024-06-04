import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Sitebar from "../components/Sitebar/Sitebar";

const Routelar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user);

  return (
    <div>
      {user === null ? (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div className="wrapper">
          <Sitebar />
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Routelar;
