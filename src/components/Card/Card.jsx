import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ title, fanlar }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        title === "Yangi gurux ochish"
          ? navigate("/creategroup")
          : title === "Yangi ochilgan guruhlar"
          ? navigate("/")
          : null;
      }}
    >
      <p>{title}</p>
      <div>
        {fanlar?.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </div>
    </div>
  );
};

export default Card;
