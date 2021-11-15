import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../images/loginImage.png";
const Login = () => {
  const [loginValue, setLoginValue] = useState({});
  const { user, signInWithEmail, isLoading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  console.log(history, location);
  const redirect = location?.state?.from || "/dashboard";
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginValue };
    newLoginData[field] = value;
    setLoginValue(newLoginData);
  };
  const handleLogin = (e) => {
    signInWithEmail(loginValue.email, loginValue.password, location, history);
    history.push(redirect);
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <Row className="d-flex align-items-center">
        <Col md={6} className="text-center">
          <div className="">
            <h2 className="mb-4">Login </h2>
            <form>
              <TextField
                sx={{ width: "75%", m: 1 }}
                type="email"
                onBlur={handleChange}
                id="standard-basic"
                label="Your  Email"
                name="email"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleChange}
                type="password"
                id="standard-basic"
                label="Your  password"
                name="password"
                variant="standard"
              />
              <Button
                onClick={handleLogin}
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New user?Please Register</Button>
              </NavLink>
            </form>
          </div>
        </Col>
        <Col md={6}>
          <img
            className="img-fluid"
            style={{ height: "350px" }}
            src={loginImage}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
