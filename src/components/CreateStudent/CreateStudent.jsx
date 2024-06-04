import React from "react";
import "./createstudent.css";
import { useForm } from "react-hook-form";

const CreateStudent = ({ modal, setModal, setNewStudent, addStudent, id }) => {
  const { register, handleSubmit, reset } = useForm();

  function create(data) {
    setNewStudent(data);
    addStudent(id);
    setModal(false);
  }

  const handleClickInside = (e) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="blackBackground" onClick={handleCloseModal}>
      <div className="createStudent" onClick={handleClickInside}>
        <form onSubmit={handleSubmit((data) => create(data))}>
          <b>Yangi talabani ro'yhatdan o'tkazish</b>
          <div className="formLabel">
            <div>
              <label htmlFor="name">
                <p>Familiya</p>
                <input
                  required
                  type="text"
                  {...register("fam")}
                  id="name"
                  placeholder="Mominjonov"
                />
              </label>
              <label htmlFor="fam">
                <p>Ismi</p>
                <input
                  required
                  type="text"
                  {...register("ism")}
                  id="fam"
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
              <label htmlFor="sana">
                <p>Tug'ilgan sanasi</p>
                <input
                  required
                  type="date"
                  {...register("tugilgan_sana")}
                  id="sana"
                  placeholder="21-10-2008"
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
              <button>Ro'yhatga olish</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
