import React, { useEffect, useState } from 'react';
import { Grid, TextField, Typography, Button, Autocomplete } from '@mui/material';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import requestMoneyStore from './RequestMoneyStore';
import Requests from '../../../../services/requests';
import Contacts from '../contacts/Contacts';
import contactsStore from '../contacts/ContactsStore';
import MoneySentModal from '../../partials/modal/MoneySentModal';

const RequestMoney = observer(() => {
    const { id } = useParams();
    const usersData = contactsStore.users;
    const [amount, setAmount] = useState('');
    const [debtor, setDebtor] = useState('');
    const [isDebtorValid, setIsDebtorValid] = useState(true);
    const request = new Requests();
    const [moneySentModalOpen, setMoneySentModalOpen] = useState(false);

    useEffect(() => {
        contactsStore.users.forEach((item) => {
            if (item._id === id) {
                requestMoneyStore.addUserContact(item);
                requestMoneyStore.setUserId(id);
            }
        });
    }, [id]);

    const handleDebtorChange = (_, value) => {
        setDebtor(value);
        setIsDebtorValid(true);
    };

    const handleInputChange = () => {
        setIsDebtorValid(true);
    };

    const handleRequestMoney = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!debtor || !amount || parseFloat(amount) <= 0) {
            setIsDebtorValid(false);
            return;
        }

        try {
            const selectedUser = contactsStore.users.find((user) => user.username === debtor);

            if (!selectedUser) {
                setIsDebtorValid(false);
                return;
            }

            const userAvatar = selectedUser.avatar;

            await request.POST_TRANSACTION(token, {
                userName: debtor,
                amount: parseFloat(amount),
                userAvatar: userAvatar,
                trType: requestMoneyStore.trType
            });

            setDebtor('');
            setAmount('');

            setMoneySentModalOpen(true);
        } catch (error) {
            console.error('Error posting transaction:', error);
            console.log('Error response data:', error.response ? await error.response.json() : 'No response data');
            throw error;
        }
    };


    const handleContactSelection = (selectedUsername) => {
        setDebtor(selectedUsername);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <Grid>
                <Autocomplete
                    id="debtor"
                    options={usersData.map((user) => user.username)}
                    freeSolo
                    value={debtor}
                    onChange={handleDebtorChange}
                    onInputChange={handleInputChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Debitor" sx={{ minWidth: '350px', mt: 2 }} required />
                    )}
                />
            </Grid>

            {isDebtorValid && (
                <Grid>
                    <TextField
                        id="amount"
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        sx={{ minWidth: '350px', mt: 2 }}
                        required
                    />
                </Grid>
            )}

            {!isDebtorValid && (
                <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                    User not registered in the bank.
                </Typography>
            )}

            <Grid container sx={{ justifyContent: 'center', mt: 2 }}>
                <Button type="submit" onClick={handleRequestMoney} variant="contained" color="primary" disabled={!isDebtorValid}
                    sx={{
                        backgroundColor: '#1D1029',
                        color: '#fff',
                        width: '150px',
                        fontFamily: "Outfit",
                        fontSize: '14px',
                        textTransform: 'initial'
                    }}
                >
                    Request Money
                </Button>
            </Grid>

            <MoneySentModal
                isOpen={moneySentModalOpen}
                onClose={() => setMoneySentModalOpen(false)}
            />

            <Grid sx={{
                mt: 3
            }}>
                <Contacts onSelect={handleContactSelection} />

            </Grid>
        </Grid>
    );
});

export default RequestMoney;
