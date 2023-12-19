import React from 'react';
import { Modal, Typography, Button, Box } from '@mui/material';

const LogOutConfirm = ({ open, onClose, onConfirm }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 2,
                }}
            >
                <Typography sx={{ mb: 2, padding: "10px 15px" }}>Are you sure you want to log out?</Typography>
                <Button onClick={onConfirm} variant="contained"
                    sx={{
                        backgroundColor: '#1D1029',
                        color: '#fff',
                        fontFamily: "Outfit",
                        fontSize: '14px',
                        textTransform: 'initial',
                        mr: 2,
                        '&:hover': {
                            backgroundColor: '#EC1B69',
                          },
                    }}>
                    Yes
                </Button>
                <Button onClick={onClose} variant="outlined"
                    sx={{
                        borderColor: '#1D1029',
                        color: '#1D1029',
                        fontFamily: "Outfit",
                        fontSize: '14px',
                        textTransform: 'initial',
                        '&:hover': {
                            backgroundColor: '#EC1B69',
                          },
                    }}>
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default LogOutConfirm;
