import { Link } from "react-router-dom";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "./login.css";
import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("email is required");
    if (password.trim() === "") return toast.error("password is required");
    console.log({ email, password });
  };
  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">login</h1>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          className="password"
          placeholder="password"
        />
        {showPassword ? (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-fill show-password-icons"
          ></i>
        ) : (
          <i
            onClick={showPasswordHandler}
            className="bi bi-eye-slash show-password-icons"
          ></i>
        )}
        <button type="submit" className="form-btn">
          login
        </button>
      </form>
      <div className="form-footer">
        don't have account?
        <Link to="/register">register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
