import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import { ToastContainer, toast } from "react-toastify";

const RegisterPage = () => {
      const [email, setEmail] = useState("");
      const [userName, setUserName] = useState("");
      const [password, setPassword] = useState("");
      const [repassword, setRepassword] = useState("");
        const handleFormSubmit = (e) => {
          e.preventDefault();
          if (userName.trim() === "") return toast.error("userName is required");
          if (email.trim() === "") return toast.error("email is required");
          if (password.trim() === "") return toast.error("password is required");
          if (repassword.trim() !== password.trim() ) return toast.error("repassword is not equal to password");
          console.log({ email, password });
        };
      

    return ( 
        <div className="form-wrapper">
                  <ToastContainer theme="colored" />
        <h1 className="form-title">register</h1>
        <form onSubmit={handleFormSubmit} className="form">
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="user-name" />
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
          type= "password"
          className="password"
          placeholder="password"
        />
            <input value={repassword} onChange={(e) => setRepassword(e.target.value)} type="password" className="repassword" />
            <button type='submit' className='form-btn'>register</button>
        </form>
        <div className="form-footer">
            go to Login?
            <Link to='/login'>Login</Link>
        </div>
       </div>
     );
}
 
export default RegisterPage;