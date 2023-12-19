import React, { useEffect, useState } from 'react';
import { Grid, TextField, Typography, Button, Autocomplete } from '@mui/material';
import { useParams } from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import { observer } from 'mobx-react';
import contactsStore from '../contacts/ContactsStore';
import sendMoneyStore from './SendMoneyStore';
import Requests from '../../../../services/requests';
import MoneySentModal from '../../partials/modal/MoneySentModal';

const SendMoney = observer(() => {
    const { id } = useParams();
    const usersData = contactsStore.users;
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [isRecipientValid, setIsRecipientValid] = useState(true);
    const request = new Requests();
    const [moneySentModalOpen, setMoneySentModalOpen] = useState(false);

    useEffect(() => {
        contactsStore.users.forEach((item) => {
            if (item._id === id) {
                sendMoneyStore.addUserContact(item);
                sendMoneyStore.userId = id;
                setRecipient(item.username);
            }
        });
    }, [id]);

    const handleRecipientChange = (_, value) => {
        setRecipient(value);
        setIsRecipientValid(true);
    };

    const handleInputChange = () => {
        setIsRecipientValid(true);
    };

    const handleSendMoney = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!recipient || !amount || parseFloat(amount) <= 0) {
            setIsRecipientValid(false);
            return;
        }

        try {
            const selectedUser = contactsStore.users.find(
                (user) => user.username === recipient
            );

            if (!selectedUser) {
                setIsRecipientValid(false);
                return;
            }

            const userAvatar = selectedUser.avatar;

            await request.POST_TRANSACTION(token, {
                userName: recipient,
                amount: parseFloat(amount),
                userAvatar: userAvatar,
            });

            setRecipient('');
            setAmount('');

            setMoneySentModalOpen(true);
        } catch (error) {
            console.error('Error posting transaction:', error);
            console.log(
                'Error response data:',
                error.response
                    ? await error.response.json()
                    : 'No response data'
            );
            throw error;
        }
    };

    const handleContactSelection = (selectedUsername) => {
        setRecipient(selectedUsername);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Grid
            container
            sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
            <Grid>
                <Autocomplete
                    id="recipient"
                    options={usersData.map((user) => user.username)}
                    freeSolo
                    value={recipient}
                    onChange={handleRecipientChange}
                    onInputChange={handleInputChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Recipient"
                            sx={{ minWidth: '350px', mt: 2 }}
                            required
                        />
                    )}
                />
            </Grid>

            {isRecipientValid && (
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

            {!isRecipientValid && (
                <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                    User not registered in the bank.
                </Typography>
            )}

            <Grid container sx={{ justifyContent: 'center', mt: 2 }}>
                <Button
                    type="submit"
                    onClick={handleSendMoney}
                    variant="contained"
                    color="primary"
                    disabled={!isRecipientValid}
                    sx={{
                        backgroundColor: '#1D1029',
                        color: '#fff',
                        width: '150px',
                        fontFamily: 'Outfit',
                        fontSize: '14px',
                        textTransform: 'initial',
                    }}
                >
                    Send Money
                </Button>
            </Grid>

            <MoneySentModal
                isOpen={moneySentModalOpen}
                onClose={() => setMoneySentModalOpen(false)}
            />

            <Grid
                sx={{
                    mt: 3,
                }}
            >
                <Contacts onSelect={handleContactSelection} />
            </Grid>
        </Grid>
    );
});

export default SendMoney;
