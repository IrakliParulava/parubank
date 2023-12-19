import React from 'react';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ParuPayLogo from "../../../../assets/image/ParuPayLogo.png";

function HeaderPrivate({ title }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Grid
            container
            sx={{
                width: '100%',
                height: '60px',
                background: '#1D1029',
                display: 'flex',
                padding: '10px',
                position: 'fixed',
                zIndex: 999,
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
            }}
        >
            <IconButton onClick={handleBack} sx={{ alignItems: 'flex-start', color: '#fff' }}>
                <ArrowBack />
            </IconButton>
            <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Outfit', fontWeight: '500', color: '#fff' }}>
                {title || 'Default Title'}
            </Typography>
            <Avatar
                alt=''
                src={ParuPayLogo}
                sx={{
                    width: 'auto',
                    height: '30px',
                }}
            />
        </Grid>
        
    );
}

export default HeaderPrivate;
