import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import TransactionItem from './TransactionItem';
import Requests from '../../../../services/requests';
import { Link } from 'react-router-dom';

export default function LastTransactions() {
    const [userData, setUserData] = useState({});
    const requests = useMemo(() => new Requests(), []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            requests.GET_USER_DATA(token)
                .then(data => {
                    setUserData(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [requests]);

    const transactions = userData.transactions || [];

    const last15Transactions = transactions.slice(-15).reverse();

    return (
        <Grid container sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pb: 2,
                pt: 2
            }}>
                <Typography sx={{
                    fontSize: "16px",
                    fontFamily: "Outfit",
                    fontWeight: "700"
                }}
                >
                    Last Transactions
                </Typography>
                <Typography sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: "Outfit",
                    fontWeight: "500"
                }}
                >
                    <Link to="/transactions">
                        <button className='secenderyBtn'>View All</button>
                    </Link>
                </Typography>
            </Grid>
            <Grid sx={{
                minWidth: '320px',
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                mb: 5
            }}
            >
                {last15Transactions
                    .filter(t => t.trType === 'in' || t.trType === 'out')
                    .map((transaction, index) => (
                        <TransactionItem key={index} {...transaction} />
                    ))
                }

            </Grid>
        </Grid>
    );
}
