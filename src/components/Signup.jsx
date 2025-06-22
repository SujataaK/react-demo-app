import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");

  const [icon1, setIcon1] = useState(<FaEyeSlash />);
  const [icon2, setIcon2] = useState(<FaEyeSlash />);

  const togglePassword = () => {
    if (type1 === "password") {
      setType1("text");
      setIcon1(<FaEye />);
    } else {
      setType1("password");
      setIcon1(<FaEyeSlash />);
    }
  };

  const toggleConfirmPassword = () => {
    if (type2 === "password") {
      setType2("text");
      setIcon2(<FaEye />);
    } else {
      setType2("password");
      setIcon2(<FaEyeSlash />);
    }
  };

   const [credential, setCredential] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  console.log("this is credential name", credential.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const response = await fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
    console.log(" signup form submitted");
  };
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-content'>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
            id='name'
            type="text"
            placeholder="Enter your Username"
            value={credential.name}
            onChange={handleChange}
            required
            />
          </div>

          <div className="input-box">
            <input
            id='email'
             type="email"
             placeholder="Enter your Email"
             required
             value={credential.email}
             onChange={handleChange}
             
             />
          </div>

          <div className="input-box password-wrapper">
            <input
              type={type1}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePassword}>
              {icon1}
            </span>
          </div>

          <div className="input-box password-wrapper">
            <input
              type={type2}
              name="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={toggleConfirmPassword}>
              {icon2}
            </span>
          </div>

          <div className="btn">
            <button type="submit">Register</button>
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <Link className='form-link' to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
