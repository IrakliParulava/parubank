import React from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';
import contactsStore from './ContactsStore';

function ContactSearch(props) {
    
    const handleSelectUser = (selectedUser) => {
        props.onSelectUser(selectedUser);
        props.onChange(selectedUser);
    };

    const filteredUsers = contactsStore.getFilteredUsers(props.value);

    return (
        <Grid>
            <Autocomplete
                id="recipient"
                options={filteredUsers.map((item) => item.username)}
                freeSolo
                value={props.value}
                onChange={(event, newValue) => handleSelectUser(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search by name"
                        sx={{ minWidth: '300px', mt: 2 }}
                        required
                    />
                )}
            />
        </Grid>
    );
}

export default ContactSearch;
