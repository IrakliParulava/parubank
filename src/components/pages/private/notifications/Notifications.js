import React from 'react';
import { Grid } from '@mui/material';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import RequestedMoneyPage from '../requestedMoneyPage/RequestedMoneyPage';

function Notifications(props) {
    return (
        <Grid>
            <HeaderPrivate title={'Notifications'}/>

            <Grid sx={{ pt: 9 }}>
                <RequestedMoneyPage />
            </Grid>
        </Grid>
    );
}

export default Notifications;