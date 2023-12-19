import { Grid } from '@mui/material';
import React from 'react';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import SendMoney from './SendMoney';

function SendMoneyPage(props) {
    return (
        <Grid>
            <HeaderPrivate title={'Send Money'}/>

            <Grid sx={{ pt: 9 }}>
                <SendMoney />
            </Grid>
        </Grid>
    );
}

export default SendMoneyPage;