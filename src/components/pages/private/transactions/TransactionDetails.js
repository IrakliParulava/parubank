import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HeaderPrivate from '../../partials/header/HeaderPrivate';

function TransactionDetails() {
    const { state } = useLocation();

    if (!state || !state.transactionDetails) {
        return <Typography variant="h6">No transaction details found</Typography>;
    }

    const { amount, userName, trDate, trType, fee, tradingCode, address } = state.transactionDetails;

    const spanStyle = {
        fontWeight: 900,
        color: '#EC1B69'
    };

    const detailStl = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: 2,
        fontFamily: 'Outfit',
        fontSize: '12px',
        color: '#1D1029',
        fontWeight: '500',
    };

    return (
        <Grid
            container
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                background: '#1d10291f',
            }}
        >
            <HeaderPrivate title={'Transactions Details'} />
            <Box
                sx={{
                    minWidth: '300px',
                    alignSelf: 'flex-start',
                    p: 2,
                    mt: 9,
                    borderRadius: '20px',
                    background: '#fff',
                }}
            >
                <Typography sx={{
                    fontFamily: "Outfit",
                    fontWeight: '700',
                    fontSize: '20px'
                }}
                >
                    Transaction Details
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Amount:</span> $ {amount}.00
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>User Name:</span> {userName}
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Transaction Date:</span> {trDate}
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Transaction Type:</span> {trType}
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Fee:</span> {fee}%
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Trading Code:</span> {tradingCode}
                </Typography>
                <Typography sx={{ ...detailStl }}>
                    <span style={spanStyle}>Address:</span> {address}
                </Typography>
            </Box>
        </Grid>
    );
}

export default TransactionDetails;
