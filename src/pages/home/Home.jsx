import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
    alert("are sure to logout?");
  };
  return (
    <div className={style.container}>
      <h1>Welcome to my Home Page</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
