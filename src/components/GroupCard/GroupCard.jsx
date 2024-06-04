import React from "react";
import "./groupcard.css";
import { useNavigate } from "react-router-dom";

const GroupCard = ({
  yonalish,
  hafta,
  chaqirilganSana,
  oquvchiSoni,
  ogohlantirish,
  boshlashSana,
  oquvchilar,
  modal,
  setModal,
  setId,
  id,
  mentor,
}) => {
  function toggle(id) {
    setModal(!modal);
    setId(id);
  }

  const navigate = useNavigate();

  function groupDetail() {
    navigate(`/${id}`);
  }

  return (
    <div className="groupCard">
      <b>G:{id}</b>
      <p>Yo'nalish: {yonalish}</p>
      <p>Mentor: {mentor}</p>
      <p>Hafta kuni: {hafta}</p>
      <p>Chaqirilgan sana: {chaqirilganSana}</p>
      <p>O'quvchi soni: {oquvchiSoni} ta</p>
      <p>Ogohlantirish: {ogohlantirish} ta</p>
      <p>Boshlanish sanasi: {boshlashSana}</p>
      <div className="actions">
        <button onClick={() => toggle(id)}>O'quvchi kiritish</button>
        <button onClick={groupDetail}>Guruhda ishlash</button>
      </div>
    </div>
  );
};

export default GroupCard;
