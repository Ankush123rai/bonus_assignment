import React, { useState } from "react";
import style from "./Register.module.css";
import swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });
  const [inputValArray, setInputValArray] = useState([]);

  const getInput = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password } = inputVal;
    if (firstName === "") {
      swal.fire("Invalid first name!");
    } else if (Number(firstName)) {
      swal.fire("Enter a valid name!");
    } else if (lastName === "") {
      swal.fire("Invalid last name!");
    } else if (Number(lastName)) {
      swal.fire("Enter a valid name!");
    } else if (!email.includes("@")) {
      swal.fire("Enter a valid email!");
    } else if (!email.includes(".com")) {
      swal.fire("Enter a valid email!");
    } else if (phone.length !== 10) {
      swal.fire("Number must be 10 digits long");
    } else if (password.length < 6) {
      swal.fire("Password must be at least 6 characters long");
    } else {
      setInputValArray([inputVal, ...inputValArray]);
      setInputVal({});
      localStorage.setItem(
        "input",
        JSON.stringify([inputVal, ...inputValArray])
      );
      navigate("/login");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your First Name"
          name="firstName"
          onChange={getInput}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your Last Name"
          name="lastName"
          onChange={getInput}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          onChange={getInput}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your phone"
          name="phone"
          onChange={getInput}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          onChange={getInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
