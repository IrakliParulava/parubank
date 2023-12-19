import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import Requests from '../../../../services/requests';
import HeaderPrivate from '../../partials/header/HeaderPrivate';

function AccountInfo() {
    const [accountData, setAccountData] = useState({});
    const requests = useMemo(() => new Requests(), []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            requests.GET_USER_DATA(token)
                .then(data => {
                    setAccountData(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [requests]);

    const dataStyle = {
        fontFamily: 'Outfit',
        fontSize: '18px',
        fontWeight: '700',
        color: '#EC1B69',
        mb: 2
    }

    const titleStyle = {
        fontFamily: 'Outfit',
        fontSize: '14px',
        fontWeight: '700',
        color: '#1D1029',
    }

    return (
        <Grid>
            <HeaderPrivate title={'Account Info'} />

            <Grid sx={{ padding: '80px 30px 15px 30px' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar alt={accountData.fullName}
                        src={accountData.avatar}
                        sx={{
                            width: 150,
                            height: 150,
                            border: '3px solid #EC1B69',
                            boxSizing: 'content-box',
                        }} />
                </Grid>

                <Grid sx={{ mt: 4 }}>
                    <Grid>
                        <Typography sx={{ ...titleStyle}} >
                            Full Name:
                        </Typography>
                        <Typography sx={{ ...dataStyle}} >
                            {accountData.fullName || 'Not specified'}
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography sx={{ ...titleStyle}} >
                            Username:
                        </Typography>
                        <Typography sx={{ ...dataStyle}} >
                            @{accountData.username}
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography sx={{ ...titleStyle}} >
                            Current balance:
                        </Typography>
                        <Typography sx={{ ...dataStyle}} >
                            $ {accountData.balance || '0'}.00
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography sx={{ ...titleStyle}}>
                            Age:
                        </Typography>
                        <Typography sx={{ ...dataStyle}}>
                            {accountData.age || 'Not specified'}
                        </Typography>
                    </Grid>

                    <Grid>
                    <Typography sx={{ ...titleStyle}}>
                            Bio:
                        </Typography>
                        <Typography sx={{ ...dataStyle}}>
                            {accountData.bio || 'Not specified'}
                        </Typography>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    );
}

export default AccountInfo;
