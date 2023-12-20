import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, IconButton, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Requests from '../../../../services/requests';
import contactsStore from './ContactsStore';
import { ArrowCircleDownRounded, ArrowCircleUpRounded } from '@mui/icons-material';

function Contacts(props) {
    const [userSearch, setUserSearch] = useState('');
    const requests = useMemo(() => new Requests(), []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            requests.GET_ALL_USERS(token)
                .then(data => {
                    contactsStore.addUsers(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [requests]);

    // eslint-disable-next-line no-unused-vars
    const handleInputChange = (value) => {
        setUserSearch(value);
    };

    const filteredUsersArray = contactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(userSearch.toLowerCase())
    );


    return (
        <Grid sx={{ pb: 11 }}>
            <Typography sx={{
                fontFamily: 'Outfit',
                fontSize: '20px',
                fontWeight: '800',
                color: '#EC1B69',
                pl: 2,
            }}>
                Contact List
            </Typography>
            <List sx={{ width: '100%', minWidth: 360, mb: 3 }}>
                {filteredUsersArray.map((item) => (
                    <ListItem key={item._id} alignItems="center" onClick={() => props.onSelect(item.username)}>
                        <ListItemAvatar>
                            <Avatar alt={item.fullName} src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.fullName}
                            secondary={item.username}
                        />
                        <Link to={`/sendMoney`}>
                            <IconButton sx={{ color: '#1D1029' }}>
                                <ArrowCircleUpRounded />
                            </IconButton>
                        </Link>
                        <Link to={`/requestMoney`}>
                            <IconButton sx={{ color: '#EC1B69' }}>
                                <ArrowCircleDownRounded />
                            </IconButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
}

export default Contacts;
