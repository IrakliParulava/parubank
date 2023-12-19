import React from 'react';
import { Grid } from '@mui/material';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import RequestMoney from './RequestMoney';

function RequestMoneyPage(props) {
    return (
        <Grid>
            <HeaderPrivate title={'Request Money'}/>

            <Grid sx={{ pt: 9 }}>
                <RequestMoney />
            </Grid>
        </Grid>
    );
}

export default RequestMoneyPage;