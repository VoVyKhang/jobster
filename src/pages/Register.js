import React, { useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";

const inititalState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(inititalState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            value={values.name}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit " className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
