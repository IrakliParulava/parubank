import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Typography, Paper, Avatar, IconButton, Modal, Button, Box } from '@mui/material';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import Requests from '../../../../services/requests';

function RequestedMoneyPage() {
    const [requestedTransactions, setRequestedTransactions] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState({
        userName: '',
        userAvatar: '',
        amount: 0,
        tradingCode: ''
    });
    const requests = useMemo(() => new Requests(), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const data = await requests.GET_USER_DATA(token);
                    const filteredTransactions = data.transactions.filter(transaction => (
                        transaction.trType === 'request' &&
                        !transaction.isPaid &&
                        transaction.userName !== data.userName
                    ));
                    setRequestedTransactions(filteredTransactions.reverse());
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [requests]);

    const handleArrowClick = (transaction) => {
        setTransactionDetails({
            userName: transaction.userName,
            userAvatar: transaction.userAvatar,
            amount: transaction.amount,
            tradingCode: transaction.tradingCode,
        });
        setOpenModal(true);
    };

    const handleConfirmTransaction = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await requests.POST_TRANSACTION(token, {
                userName: transactionDetails.userName,
                amount: transactionDetails.amount,
                userAvatar: transactionDetails.userAvatar,
            });

            if (response.status === "OK") {
                await requests.TRANSACTIONS_REQUEST(token, {
                    tradingCode: transactionDetails.tradingCode,
                    trType: 'request-Done',
                });

                setRequestedTransactions(prevTransactions =>
                    prevTransactions.map(transaction =>
                        transaction.tradingCode === transactionDetails.tradingCode
                            ? { ...transaction, trType: 'request-Done' }
                            : transaction
                    )
                );

                setOpenModal(false);
                setTransactionDetails({
                    userName: '',
                    userAvatar: '',
                    amount: 0,
                    tradingCode: '',
                });
            } else {
                console.error('Error confirming transaction:', response);
            }
        } catch (error) {
            console.error('Error confirming transaction:', error);
        }
    };



    const handleRejectTransaction = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await requests.TRANSACTIONS_REQUEST(token, {
                userName: transactionDetails.userName,
                amount: transactionDetails.amount,
                userAvatar: transactionDetails.userAvatar,
                trType: 'requestRejected',
            });

            if (response.status === 'OK') {
                await requests.DELETE_NOTIFICATIONS(token);

                setRequestedTransactions(prevTransactions =>
                    prevTransactions.filter(transaction =>
                        !(transaction.userName === transactionDetails.userName && transaction.amount === transactionDetails.amount)
                    )
                );

                setOpenModal(false);
                setTransactionDetails({
                    userName: '',
                    userAvatar: '',
                    amount: 0,
                });
            } else {
                console.error('Error rejecting transaction:', response);
            }
        } catch (error) {
            console.error('Error rejecting transaction:', error);
        }
    };


    const handleModalClose = () => {
        setOpenModal(false);
        setTransactionDetails({
            userName: '',
            userAvatar: '',
            amount: 0
        });
    };

    return (
        <Grid container sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
        }}>
            <Grid container sx={{
                display: "flex",
                mb: 2
            }}>
                <Typography key="pageTitle" variant="h6" sx={{ fontFamily: 'Outfit', fontWeight: 400 }}>
                    Requested Transactions Awaiting Payment
                </Typography>
            </Grid>

            <Grid sx={{ mb: 11 }}>
                {requestedTransactions.map((transaction, index) => (
                    <Grid item key={`${transaction._id}_${index}`} xs={12} sm={6} md={4} lg={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                mb: 2
                            }}
                        >
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Grid>
                                    <Typography sx={{
                                        fontFamily: 'Outfit',
                                        fontWeight: 600,
                                        color: '#EC1B69',
                                    }}>
                                        Requested: ${transaction.amount}.00
                                    </Typography>
                                </Grid>
                                <Grid sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mt: 2
                                }}>
                                    <Grid sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Avatar alt={transaction.userName} src={transaction.userAvatar} />

                                        <Grid sx={{ ml: 2 }}>
                                            <Typography sx={{
                                                fontFamily: 'Outfit',
                                                fontWeight: 500
                                            }}>
                                                {transaction.userName}
                                            </Typography>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                fontSize={12}
                                                fontFamily={"Outfit"}
                                                color="#1a1a1a89"
                                            >
                                                {transaction.trDate}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <IconButton sx={{ color: '#EC1B69' }} onClick={() => handleArrowClick(transaction)}>
                                        <ArrowCircleUpRounded />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: 300 }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm Transaction
                    </Typography>
                    <Avatar alt={transactionDetails.userName} src={transactionDetails.userAvatar} sx={{ width: 64, height: 64, mt: 2 }} />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to send ${transactionDetails.amount}.00 to {transactionDetails.userName}?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Button onClick={handleConfirmTransaction} sx={{ backgroundColor: '#4CAF50', color: 'white' }}>Confirm</Button>
                        <Button onClick={handleRejectTransaction} sx={{ backgroundColor: '#EC1B69', color: 'white' }}>Reject</Button>
                        <Button onClick={handleModalClose} sx={{ backgroundColor: '#607D8B', color: 'white' }}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    );
}

export default RequestedMoneyPage;
