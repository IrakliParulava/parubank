import React, { useState } from "react";
import Requests from "../../../../services/requests";
import { Avatar, Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ParuPay from "../../../../assets/image/ParuPay.png";
import Logo from "../../../../assets/image/ParuPayLogo.png";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";

function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const requests = new Requests();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = () => {
    const userData = {
      "username": name,
      "password": password,
    };

    requests.POST_LOGIN_USER(userData)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate("/dashboard");
        } 
      })
      .catch((error) => {
        alert({ error });
      });
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundColor: '#1D1029',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (max-width:600px)': {
            display: 'none',
          },
        }}
      >
        <img src={ParuPay} alt="ParuPay" />
      </Grid>
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 7,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              p: 2,
              bgcolor: '#1D1029',
              width: 70,
              height: 70,
            }}
          >
            <img src={Logo} alt="Parupay" />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: 'Outfit',
              fontSize: '32px',
              color: '#000',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Login and start Transferring
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              type="text"
              value={name}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
            />

            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Grid item xs={12}>
                <Link to="#" className="btnLinks">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Grid
              item
              sx={{
                mt: 9,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PrimaryBtn
                text={'Login'}
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              />
              <Link to="/signup">
                <button className="secenderyBtn">Create new account</button>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
