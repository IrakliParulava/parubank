import { Button, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import "../../scss/app.scss"

const CustomButton = styled(Button)({
  width: '320px',
  height: '50px',
  backgroundColor: '#1D1029',
  color: '#fff',
  fontFamily: 'Outfit',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '150%',
  borderRadius: '10px',
  cursor: 'pointer',
  marginBottom: '20px',
  textTransform: 'none',
  transition: 'ease-in-out .7s',
  '&:hover': {
    backgroundImage: 'linear-gradient(#F05B57, #EC1B69)',
  },
});

const PrimaryBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <CustomButton startIcon={icon} onClick={onClick} disabled={disabled}>
      <Typography>{text}</Typography>
    </CustomButton>
  );
};

export default PrimaryBtn;
