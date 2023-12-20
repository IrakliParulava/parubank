import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import TransactionItem from './TransactionItem';
import Requests from '../../../../services/requests';

export default function Transactions() {
    const [userData, setUserData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const requests = useMemo(() => new Requests(), []);
    const transactions = userData.transactions || [];

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

    const isMatchingSearch = (transaction) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            (transaction.userName && transaction.userName.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (transaction.amount && transaction.amount.toString().toLowerCase().includes(lowerCaseSearchTerm)) ||
            false
        );
    };

    const handleFilterButtonClick = (filter) => {
        setFilterType((prevFilter) => (prevFilter === filter ? 'all' : filter));
    };

    const filteredTransactions = transactions
        .filter(t => isMatchingSearch(t))
        .filter(t => filterType === 'all' || (filterType === 'incomes' && t.trType === 'in') || (filterType === 'expenses' && t.trType === 'out'));

    return (
        <Grid sx={{ pb: 8 }}>
            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                p: 3
            }}>
                <Grid sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                }}>
                    <TextField
                        id="outlined-search"
                        label="Search by name or username"
                        type="search"
                        sx={{
                            width: "90%",
                        }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Grid>

                <Grid sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 4
                }}>
                    <Box>
                        <Button
                            sx={{
                                mr: 2,
                                backgroundColor: filterType === 'incomes' ? '#EC1B69' : '#EC1B69',
                                color: '#fff',
                                width: '150px',
                                fontFamily: "Outfit",
                                fontSize: '14px',
                                textTransform: 'initial',
                                '&:active, &:focus': {
                                    backgroundColor: filterType === 'incomes' ? '#EC1B69' : '#EC1B69',
                                    color: '#1D1029',
                                }
                            }}
                            onClick={() => handleFilterButtonClick('incomes')}
                        >
                            Incomes
                        </Button>
                        <Button sx={{
                            backgroundColor: filterType === 'expenses' ? '#1D1029' : '#1D1029',
                            color: '#fff',
                            width: '150px',
                            fontFamily: "Outfit",
                            fontSize: '14px',
                            textTransform: 'initial',
                            '&:active, &:focus': {
                                backgroundColor: filterType === 'expenses' ? '#1D1029' : '#1D1029',
                                color: '#EC1B69',
                            }
                        }}
                            onClick={() => handleFilterButtonClick('expenses')}
                        >
                            Expenses
                        </Button>
                    </Box>
                </Grid>
                <Grid sx={{ mb: 3, mt: 3 }}>
                    <Grid>
                        <Typography sx={{
                            fontSize: "16px",
                            fontFamily: "Outfit",
                            fontWeight: "800"
                        }}
                        >
                            Completed Transaction
                        </Typography>
                    </Grid>
                </Grid>
                <Grid sx={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    mb: 5
                }}
                >
                    {filteredTransactions
                        .filter(t => t.trType === 'in' || t.trType === 'out')
                        .slice()
                        .reverse()
                        .map((t, index) => (
                            <TransactionItem key={index} {...t} />
                        ))
                    }
                </Grid>

            </Grid>
        </Grid>

    );
}
