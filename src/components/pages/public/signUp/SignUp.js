import React, { useState } from "react";
import Requests from "../../../../services/requests";
import { Avatar, Box, Grid, Paper, TextField, Typography } from "@mui/material";
import ParuPay from "../../../../assets/image/ParuPay.png";
import Logo from "../../../../assets/image/ParuPayLogo.png";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";

function SignUP() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const requests = new Requests();
  const navigate = useNavigate();

  const handleDataChange = (e, setFunction) => {
    setFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  const handleSignup = () => {
    const userData = {
      "username": name,
      "password": password,
      "confirm_password": confirmPassword
    };

    if (password === confirmPassword) {
      requests.POST_REG_USER(userData)
        .then(data => {
          if (data.id) {
            console.log(data);
            navigate("/signin");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
            Signup and start transferring
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
              id="name"
              label="Name"
              type='text'
              value={name}
              onChange={(e) => {
                handleDataChange(e, setName);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                handleDataChange(e, setPassword);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                handleDataChange(e, setConfirmPassword);
              }}
            />

            <Grid
              item
              sx={{
                mt: 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PrimaryBtn
                text={'Create account'}
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              />

              <Link to="/signin">
                <button className='secenderyBtn'>Already have an account?</button>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUP;
