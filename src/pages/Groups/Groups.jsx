import React, { useEffect, useState } from "react";
import "./groups.css";
import axios from "axios";
import GroupCard from "../../components/GroupCard/GroupCard";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Groups = ({ setDetailId }) => {
  const api = "https://66559a5b3c1d3b60293a4261.mockapi.io/groups";
  const { register, handleSubmit, reset } = useForm();
  const [groups, setGroups] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch groups. Please try again later.");
        console.log(err);
      });
  }, [refresh]);

  const addStudent = (id, newStudent) => {
    const groupToUpdate = groups.find((group) => group.id === id);

    if (groupToUpdate) {
      const filteredStudents = groupToUpdate.oquvchilar.filter(Boolean);
      const updatedStudents = [...filteredStudents, newStudent];
      const updatedGroup = {
        ...groupToUpdate,
        oquvchilar: updatedStudents,
        oquvchiSoni: groupToUpdate.oquvchiSoni + 1,
      };

      axios
        .put(`${api}/${id}`, updatedGroup)
        .then((res) => {
          setRefresh(!refresh);
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to add student. Please try again later.");
        });
    } else {
      console.log("Group not found!");
      setError("Group not found!");
    }
  };

  const create = (data) => {
    addStudent(id, data);
    reset();
    setModal(false);
  };

  const handleClickInside = (e) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="groups">
      {modal && (
        <div className="blackBackground" onClick={handleCloseModal}>
          <div className="createStudent" onClick={handleClickInside}>
            <form onSubmit={handleSubmit(create)}>
              <b>Yangi talabani ro'yhatdan o'tkazish</b>
              <div className="formLabel">
                <div>
                  <label htmlFor="fam">
                    <p>Familiya</p>
                    <input
                      required
                      type="text"
                      {...register("fam")}
                      id="fam"
                      placeholder="Mominjonov"
                    />
                  </label>
                  <label htmlFor="ism">
                    <p>Ismi</p>
                    <input
                      required
                      type="text"
                      {...register("ism")}
                      id="ism"
                      placeholder="Jasurbek"
                    />
                  </label>
                  <label htmlFor="tel">
                    <p>Telefon</p>
                    <input
                      required
                      type="tel"
                      {...register("tel")}
                      id="tel"
                      defaultValue={"+998"}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="tugilgan_sana">
                    <p>Tug'ilgan sanasi</p>
                    <input
                      required
                      type="date"
                      {...register("tugilgan_sana")}
                      id="tugilgan_sana"
                    />
                  </label>
                  <label htmlFor="manzil">
                    <p>Yashash manzili</p>
                    <input
                      required
                      type="text"
                      {...register("manzil")}
                      id="manzil"
                      placeholder="Namangan, Uychi"
                    />
                  </label>
                  <label htmlFor="status">
                    <p>Status</p>
                    <input
                      required
                      type="text"
                      {...register("status")}
                      id="status"
                      placeholder="Talaba"
                    />
                  </label>
                  <button type="submit">Ro'yhatga olish</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {groups.length > 0 ? (
        groups.map((item, index) => (
          <GroupCard
            setId={setId}
            key={index}
            yonalish={item.yonalish}
            mentor={item.mentor}
            hafta={item.hafta}
            chaqirilganSana={item.chaqirilganSana}
            oquvchiSoni={item.oquvchiSoni}
            ogohlantirish={item.ogohlantirish}
            boshlashSana={item.boshlashSana}
            oquvchilar={item.oquvchilar}
            setModal={setModal}
            modal={modal}
            id={item.id}
            setDetailId={setDetailId}
          />
        ))
      ) : (
        <div className="empty">
          <p>Guruhlar ro'yhati bo'sh</p>
        </div>
      )}
    </div>
  );
};

export default Groups;
