import React, { useState } from 'react';
import loginImage from "../../../images/loginImage.png"

import {

  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth"

const Register = () => {
    const {registerUser,user,error,isLoading}=useAuth();
    const [loginData, setloginData] = useState({});
    const history=useHistory()
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
      };
    
      const handleRegistration = (e) => {
        if (loginData.password1 !== loginData.password2) {
          alert("password didnt match");
        }
        registerUser(loginData.email, loginData.password1,history,loginData.name)
        e.preventDefault();
      };
    return (
        <div className="container">
            <Grid container spacing={2}>
        <Grid  item xs={12} md={6}>
          <Typography sx={{ mt: 8 }} variant="h6" gutterBottom component="div">
            Register
          </Typography>
           <form>
            <TextField
              sx={{ width: "75%", m: 1 }}
              onBlur={handleBlur}
              type="text"
              id="standard-basic"
              label="Your  Name"
              name="name"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              onBlur={handleBlur}
              type="email"
              id="standard-basic"
              label="Your  Email"
              name="email"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              onBlur={handleBlur}
              type="password"
              id="standard-basic"
              label="Your  password"
              name="password1"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              onBlur={handleBlur}
              type="password"
              id="standard-basic"
              label="Confirm Your  password"
              name="password2"
              variant="standard"
            />
            <Button
              onClick={handleRegistration}
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Register
            </Button>
          </form>
          {isLoading && <CircularProgress />}

{error && <Alert severity="error">{error}</Alert>}
{user?.email && (
  <Alert severity="success">Registration successful</Alert>
)}
          <NavLink style={{ textDecoration: "none" }} to="/login">
          <Button variant="text">Already have an account?Please Login</Button>
        </NavLink>
      </Grid>
      <Grid item xs={12} md={6}>
        <img style={{ width: "100%" }} src={loginImage} alt="" />
      </Grid>
    </Grid>
        </div>
    );
};

export default Register;