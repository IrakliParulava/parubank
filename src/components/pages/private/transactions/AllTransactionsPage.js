import React from 'react';
import { Grid } from '@mui/material';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import Transactions from './Transactions';

function AllTransactionsPage(props) {
    return (
        <Grid>
            <HeaderPrivate title={'Transactions'}/>

            <Grid sx={{ pt: 9 }}>
                <Transactions />
            </Grid>
        </Grid>
    );
}

export default AllTransactionsPage;