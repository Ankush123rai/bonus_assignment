import React, { useState } from "react";
import style from "./Login.module.css";
import swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    email: "",
    password: ""
  });

  const localData = JSON.parse(localStorage.getItem("input")) || [];
  console.log(localData);

  const getInput = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = inputVal;

    if (email === "") {
      swal.fire("Please enter your email!");
    } else if (password === "") {
      swal.fire("Please enter your password!");
    } else {
      const user = localData.find(
        (data) => data.email === email && data.password === password
      );

      if (user) {
        swal.fire("Login successful!");
        navigate("/"); // Navigate to the dashboard or desired page
      } else {
        swal.fire("Invalid email or password!");
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Email "
          name="email"
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
        Not registered yet?
        <Link to="/register">Register here!!!</Link>
      </p>
    </div>
  );
}
