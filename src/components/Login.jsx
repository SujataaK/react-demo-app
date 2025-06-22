import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />);

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(<FaEye />);
    } else {
      setType("password");
      setIcon(<FaEyeSlash />);
    }
  };

  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });
  console.log("this is credential name", credential);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credential;
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    console.log(" login form submitted");
  };
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-content">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
            type="text"
            placeholder="Username"
            value={credential.email}
            onChange={handleChange}
            required />
          </div>

          <div className="input-box password-wrapper">
            <input
              type={type}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <span className="eye-icon" onClick={handleToggle}>
              {icon}
            </span>
          </div>

          <div className="btn">
            <button type="submit">Log In</button>
          </div>
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="form-link" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
