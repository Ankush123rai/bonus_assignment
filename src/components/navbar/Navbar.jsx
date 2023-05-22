import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.home}>
        <NavLink to="/">Home</NavLink>
      </div>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/task">Task</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
