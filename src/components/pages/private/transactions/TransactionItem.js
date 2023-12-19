import React from 'react';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TransactionItem(props) {
    const navigate = useNavigate();
    const { userAvatar, userName, trDate, amount, trType } = props;
    let amountColor;

    if (trType === 'in') {
        amountColor = 'green';
    } else if (trType === 'out') {
        amountColor = 'red';
    } else if (trType === 'request') {
        amountColor = '#471f6c';
    }

    const isRequested = trType === 'request';
    const formattedAmount = isRequested ? `$${amount.toFixed(2)}` : `${amountColor === 'green' ? '+' : '-'} $${Math.abs(amount).toFixed(2)}`;

    const handleTransactionClick = () => {
        navigate('/TransactionDetails', { state: { transactionDetails: props } });
    };

    return (
        <Box onClick={handleTransactionClick} style={{ cursor: 'pointer' }}>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Grid >
                        <Avatar alt={userName} src={userAvatar === "any" ? null : userAvatar} sx={{ width: 40, height: 40 }} />
                    </Grid>
                    <Grid sx={{ ml: 2 }}>
                        <Typography
                            fontSize={16}
                            fontWeight={700}
                            fontFamily={"Outfit"}
                            color="#1D1029"
                        >
                            {userName}
                        </Typography>
                        <Typography
                            sx={{ display: 'inline' }}
                            fontSize={12}
                            fontFamily={"Outfit"}
                            color="#1a1a1a89"
                        >
                            {trDate}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Typography
                        variant="body2"
                        color={amountColor}
                        sx={{
                            display: 'flex',
                            fontWeight: 'bold',
                            justifyContent: 'flex-end'
                        }}
                        fontSize={13}
                    >
                        {formattedAmount}
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="inset" component="li" sx={{ margin: "10px auto" }} />
        </Box>
    );
}
