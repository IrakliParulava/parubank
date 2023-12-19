import React, { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import { AddIcCall, CircleNotifications, ExitToApp, Language, LocationOn, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LogOutConfirm from '../../partials/modal/LogOutConfirm';

function Settings(props) {
    const [isLogOutConfirmOpen, setIsLogOutConfirmOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLogOutConfirmOpen(true);
    };

    const handleConfirmLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
        setIsLogOutConfirmOpen(false);
    };

    const handleCancelLogout = () => {
        setIsLogOutConfirmOpen(false);
    };

    const titleStyle = {
        fontFamily: 'Outfit',
        fontSize: '18px',
        fontWeight: '700',
        color: '#EC1B69',
        mb: 1
    }

    const gridStyle = {
        display: 'flex',
        flexDirection: 'column',
        ml: 2,
    }

    const subTitleStyle = {
        fontFamily: 'Outfit',
        fontSize: '14px',
        fontWeight: '700',
        color: '#1D1029',
    }

    const txtStyle = {
        fontFamily: 'Outfit',
        fontSize: '12px',
        fontWeight: '400',
        color: '#1D1029',
    }

    const iconStyle = {
        fontSize: '22px',
        color: '#EC1B69',
    }

    return (
        <Grid>
            <HeaderPrivate title={'Settings'} />

            <Grid sx={{ padding: '80px 30px 15px 30px' }} >
                <Grid>
                    <Typography sx={{ ...titleStyle }} >
                        General
                    </Typography>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <Language sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography sx={{ ...subTitleStyle }} >
                                Language
                            </Typography>
                            <Typography sx={{ ...txtStyle }} >
                                Change the language of the app.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <LocationOn sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography sx={{ ...subTitleStyle }} >
                                Locations
                            </Typography>
                            <Typography sx={{ ...txtStyle }}>
                                Change the language of the app.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ margin: "20px auto", borderColor: '#1D1029', borderWidth: '1px' }} />
                </Grid>

                <Grid>
                    <Typography sx={{ ...titleStyle }}>
                        Notifications
                    </Typography>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <CircleNotifications sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography sx={{ ...subTitleStyle }} >
                                Push notifications
                            </Typography>
                            <Typography sx={{ ...txtStyle }}>
                                For daily update and others.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <Notifications sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography sx={{ ...subTitleStyle }} >
                                Promotional notifications
                            </Typography>
                            <Typography sx={{ ...txtStyle }}>
                                New campain and offers.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ margin: "20px auto", borderColor: '#1D1029', borderWidth: '1px' }} />
                </Grid>

                <Grid>
                    <Typography sx={{ ...titleStyle }}>
                        More
                    </Typography>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <AddIcCall sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography sx={{ ...subTitleStyle }} >
                                Contact us
                            </Typography>
                            <Typography sx={{ ...txtStyle }}>
                                For more information
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <ExitToApp sx={{ ...iconStyle }} />
                        <Grid sx={{ ...gridStyle }}>
                            <Typography onClick={handleLogout} sx={{ ...subTitleStyle }} >
                                Logout
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <LogOutConfirm
                open={isLogOutConfirmOpen}
                onClose={handleCancelLogout}
                onConfirm={handleConfirmLogout}
            />
        </Grid>
    );
}

export default Settings;