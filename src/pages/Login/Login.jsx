import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function send(data) {
    if (data.username === "jasur" && data.password === "1234") {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
    reset();
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit((data) => send(data))}>
        <input type="text" {...register("username")} placeholder="Username" />
        <input type="password" {...register("password")} placeholder="Password" />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
