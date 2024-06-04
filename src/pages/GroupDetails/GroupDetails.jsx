import axios from "axios";
import React, { useEffect, useState } from "react";
import "./groupdetails.css";
import { useParams, useNavigate } from "react-router-dom";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://66559a5b3c1d3b60293a4261.mockapi.io/groups/${id}`)
        .then((res) => {
          setGroup(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div className="groupdetails-wrapper">
      <b>Talabalar ro'yhati</b>
      <table>
        <thead>
          <tr>
            <th>
              Gurux: <b>25</b>
            </th>
            <th>
              Mentor: <b>{group.mentor}</b>
            </th>
            <th>
              Oquvchi soni: <b>{group.oquvchiSoni}</b>
            </th>
          </tr>
          <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Telefon</th>
            <th>Hafta kuni</th>
            <th>Yo'nalishi</th>
            <th>Yashash manzili</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {group.oquvchilar?.map((item, index) => (
            <tr key={index}>
              <td>{item.ism}</td>
              <td>{item.fam}</td>
              <td>{item.tel}</td>
              <td>{group.hafta}</td>
              <td>{group.yonalish}</td>
              <td>{item.manzil}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupDetails;
