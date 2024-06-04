import React from "react";
import photo from "../../assets/img/profileImg.png";
import Card from "../Card/Card";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const data = {
    titles: [
      { title: "Yangi gurux ochish", fanlar: ["IT", "Ingliz", "Rus", "DTM"] },
      {
        title: "Yangi ochilgan guruhlar",
        fanlar: ["IT", "Ingliz", "Rus", "DTM"],
      },
      { title: "Ro'yhatdan o'tganlar", fanlar: ["IT", "Ingliz", "Rus", "DTM"] },
    ],
  };
  const navigate = useNavigate();

  return (
    <nav>
      <div className="header">
        <b>GURUHLAR RO'YHATI</b>
        <div className="account">
          <p>admin</p>
          <div className="profileImg">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      <div className="navBody">
        {data.titles.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            fanlar={item.fanlar}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
