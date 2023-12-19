import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MoneySentModal = ({ isOpen, onClose }) => {
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);
    const [displayText, setDisplayText] = useState('Transaction Processing...');

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setTransactionSuccessful(true);
            setDisplayText('Your transaction has been successfully sent.');
        }, 3000);

        return () => {
            clearTimeout(timer1);
        };
    }, []);

    const handleClose = () => {
        setTransactionSuccessful(false);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>
                    <CheckCircleIcon style={{ marginRight: '10px' }} />
                    {displayText}
                </Typography>
                <IconButton onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {isTransactionSuccessful && (
                    <Button
                        onClick={handleClose}
                        sx={{
                            backgroundColor: '#1D1029',
                            color: '#fff',
                            fontFamily: 'Outfit',
                            fontSize: '14px',
                            textTransform: 'initial',
                            mr: 2,
                            '&:hover': {
                                backgroundColor: '#EC1B69',
                            },
                        }}>
                        Close
                    </Button>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default MoneySentModal;
