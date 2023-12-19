import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function AddCard({ open, handleClose, handleLinkCard }) {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [csc, setCSC] = useState('');
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    csc: '',
  });

  const handleAddCard = () => {
    const isValid = validateCardDetails();

    if (isValid) {
      const newCard = {
        cardHolder,
        cardNumber,
        expiryDate,
        csc,
      };

      handleLinkCard(newCard);
      handleClose();
    }
  };

  const validateCardDetails = () => {
    let isValid = true;
    const today = new Date();
    const enteredDate = new Date(expiryDate);

    // Validate card number
    const formattedCardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$|^\d{19}$/.test(formattedCardNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: 'Card number must be 16 or 19 digits' }));
      isValid = false;
    } else {
      // Format card number with spaces after every 4 digits
      const formattedDisplayCardNumber = formattedCardNumber.replace(/(\d{4})/g, '$1 ').trim();
      setCardNumber(formattedDisplayCardNumber);

      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: '' }));
    }

    // Validate expiry date
    if (enteredDate <= today) {
      setErrors((prevErrors) => ({ ...prevErrors, expiryDate: 'Expiry date must be in the future' }));
      isValid = false;
    } else {
      // Format expiry date as MM/YY
      const formattedExpiryDate = `${(enteredDate.getMonth() + 1).toString().padStart(2, '0')}/${enteredDate.getFullYear().toString().slice(2)}`;
      setExpiryDate(formattedExpiryDate);

      setErrors((prevErrors) => ({ ...prevErrors, expiryDate: '' }));
    }

    // Validate CSC
    if (!/^\d{3}$/.test(csc)) {
      setErrors((prevErrors) => ({ ...prevErrors, csc: 'CSC must be 3 digits' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, csc: '' }));
    }

    return isValid;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Typography variant="h6" gutterBottom>
          Add Card
        </Typography>

        <TextField
          label="Card Holder Name"
          fullWidth
          margin="normal"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />

        <TextField
          label="Card Number"
          fullWidth
          margin="normal"
          value={cardNumber}
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, '');
            setCardNumber(
              numericValue
                .replace(/(\d{4})/g, '$1 ')
                .trim()
                .slice(0, 19)
            );
          }}
          error={!!errors.cardNumber}
          helperText={errors.cardNumber}
        />

        <TextField
          label="Expiry Date"
          fullWidth
          margin="normal"
          value={expiryDate}
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, '');

            if (numericValue) {
              const formattedExpiryDate = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`;
              setExpiryDate(formattedExpiryDate);
            } else {
              setExpiryDate('');
            }
          }}
          error={!!errors.expiryDate}
          helperText={errors.expiryDate}
        />

        <TextField
          label="CSC"
          fullWidth
          margin="normal"
          value={csc}
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, '');
            setCSC(numericValue.slice(0, 3));
          }}
          error={!!errors.csc}
          helperText={errors.csc}
        />

        <Button variant="contained" color="primary" onClick={handleAddCard}>
          Add Card
        </Button>
      </Box>
    </Modal>
  );
}

export default AddCard;
