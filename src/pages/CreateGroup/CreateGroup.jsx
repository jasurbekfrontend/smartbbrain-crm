import React, { useRef, useState } from "react";
import "./creategroup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateGroup = () => {
  const [yonalish, setYonalish] = useState();
  const [hafta, sethafta] = useState();
  const [mentor, setmentor] = useState();
  const [time, settime] = useState();

  const room = useRef();
  const createDate = useRef();
  const openDate = useRef();
  const api = "https://66559a5b3c1d3b60293a4261.mockapi.io/groups";
  const navigate = useNavigate();

  function send(e) {
    e.preventDefault();
    const data = {
      yonalish: yonalish,
      hafta: hafta,
      mentor: mentor,
      time: time,
      room: room.current.value,
      chaqirilganSana: openDate.current.value,
      oquvchiSoni: 0,
      ogohlantirish: 0,
      boshlashSana: createDate.current.value,
      oquvchilar: [],
    };

    axios
      .post(api, data)
      .then((res) => {
        console.log(res);

        setYonalish("");
        sethafta("");
        setmentor("");
        settime("");
        room.current.value = "";
        openDate.current.value = "";
        createDate.current.value = "";
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="createGroup">
      <form onSubmit={send}>
        <b>Yangi guruh ochish</b>
        <div className="inputs">
          <label
            htmlFor="yonalish"
            onChange={(e) => setYonalish(e.target.value)}
          >
            <p>Yo'nalish</p>
            <select required id="yonalish">
              <option value="" disabled selected>
                Yonalishni tanlang
              </option>
              <option value="IT">IT</option>
              <option value="Ingliz tili">Ingliz tili</option>
              <option value="Rus tili">Rus tili</option>
              <option value="DTM">DTM</option>
            </select>
          </label>
          <label onChange={(e) => setmentor(e.target.value)} htmlFor="mentor">
            <p>Mentor</p>
            <select required id="mentor">
              {yonalish === "IT" ? (
                <>
                  <option value="" disabled selected>
                    Mentorni tanlang
                  </option>
                  <option value="bekzod">Bekzod</option>
                  <option value="bahrom">Bahrom</option>
                  <option value="ulug'">Ulug'</option>
                </>
              ) : yonalish === "Ingliz tili" ? (
                <>
                  <option value="" disabled selected>
                    Mentorni tanlang
                  </option>
                  <option selected value="ingliz">
                    ingliz tili
                  </option>
                  <option value="ielts">ielts</option>
                  <option value="cefr">cefr'</option>
                </>
              ) : yonalish === "Rus tili" ? (
                <>
                  <option value="" disabled selected>
                    Mentorni tanlang
                  </option>
                  <option selected value="rus">
                    Rus tili
                  </option>
                  <option value="rus">Rus tili</option>
                  <option value="rus">Rus tili</option>
                </>
              ) : yonalish === "DTM" ? (
                <>
                  <option value="" disabled selected>
                    Mentorni tanlang
                  </option>
                  <option selected value="dtm">
                    dtm
                  </option>
                  <option value="dtm">dtm</option>
                  <option value="dtm">dtm</option>
                </>
              ) : (
                <option selected disabled value="">
                  Avval yonalishni tanlang
                </option>
              )}
            </select>
          </label>
          <label htmlFor="hafta" onChange={(e) => sethafta(e.target.value)}>
            <p>Hafta kunlari</p>
            <select required id="hafta">
              {yonalish === "IT" ? (
                <>
                  <option value="" disabled selected>
                    Haftani tanlang
                  </option>
                  <option value="du-chor-jum">Dushanba-Chorshanba-Juma</option>
                  <option value="se-pay-shan">Seshanba-Payshanba-Shanba</option>
                </>
              ) : yonalish === "Ingliz tili" ? (
                <>
                  <option value="" disabled selected>
                    Haftani tanlang
                  </option>
                  <option value="dush-sesh-chor">
                    Dushanba-Seshanba-Chorshanba
                  </option>
                  <option value="dush-sesh-chor">
                    Dushanba-Seshanba-Chorshanba
                  </option>
                </>
              ) : yonalish === "Rus tili" ? (
                <>
                  <option value="" disabled selected>
                    Haftani tanlang
                  </option>
                  <option value="pay-jum-shan">Payshanba-Juma-Shanba</option>
                  <option value="pay-jum-shan">Payshanba-Juma-Shanba</option>
                </>
              ) : yonalish === "DTM" ? (
                <>
                  <option value="" disabled selected>
                    Haftani tanlang
                  </option>
                  <option value="du-shan">Dushanba-Shanba</option>
                  <option value="du-shan">Dushanba-Shanba</option>
                </>
              ) : (
                <option value="" disabled selected>
                  Avval yonalishni tanlang
                </option>
              )}
            </select>
          </label>
          <label htmlFor="time" onChange={(e) => settime(e.target.value)}>
            <p>Darslar vaqti</p>
            <select required id="time">
              <option value="" disabled selected>
                Vaqti tanlang
              </option>
              <option value="8-10">8:00-10:00</option>
              <option value="1-3">13:00-15:00</option>
              <option value="5-7">15:00-19:00</option>
            </select>
          </label>
          <label htmlFor="createDate">
            <p>Yaratilgan sana</p>
            <input required type="date" ref={createDate} id="createDate" />
          </label>
          <label htmlFor="openDate">
            <p>Ochilish sanasi</p>
            <input required type="date" ref={openDate} id="openDate" />
          </label>
          <label htmlFor="room">
            <p>Xona nomeri</p>
            <input required type="number" ref={room} id="room" max={14} />
          </label>
        </div>
        <button>Yangi guruh yaratish</button>
      </form>
    </div>
  );
};

export default CreateGroup;
