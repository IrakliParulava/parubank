import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Badge, Box, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBack, ChevronRight, CreditCard, Delete, Edit, ExitToApp, Help, Notifications, Person, Settings } from '@mui/icons-material';
import "../../../../scss/app.scss";
import { useNavigate } from 'react-router-dom';
import Requests from '../../../../services/requests';
import LogOutConfirm from '../../partials/modal/LogOutConfirm';

function Profile(props) {
    const [userData, setUserData] = useState({});
    const requests = useMemo(() => new Requests(), []);
    const [isLogOutConfirmOpen, setIsLogOutConfirmOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            requests.GET_USER_DATA(token)
                .then(data => {
                    setUserData(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [requests]);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleAccountInfo = () => {
        navigate('/account-info');
    };

    const handleCardsPage = () => {
        navigate('/cards-page');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleSettings = () => {
        navigate('/settings');
    };

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

    const handleNotificationClick = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const response = await fetch('http://49.13.31.246:9191/notifications', {
                    method: 'DELETE',
                    headers: {
                        'accept': 'application/json',
                        'x-access-token': token,
                    },
                });

                if (response.status === 201) {
                    const updatedUserData = { ...userData, notifications: [] };
                    setUserData(updatedUserData);

                    navigate('/notifications');
                } else {
                    console.error('Failed to delete notifications:', response.statusText);
                }
            } catch (error) {
                console.error('Error deleting notifications:', error);
            }
        }
    };

    const styleProfileBtn = {
        background: '#1d102914',
        padding: '10px',
        borderRadius: '10px',
        width: '320px',
        justifyContent: 'space-between',
        color: "#1D1029",
        marginBottom: "7px",
        fontSize: "12px",
        display: 'flex',
        alignItems: 'center'
    }

    const txtStyle = {
        ml: 2,
        fontFamily: 'Outfit',
        fontSize: '12px',
        fontWeight: '500'
    }

    const iconStyle = {
        fontSize: '16px',
        color: '#EC1B69',
    }

    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
        }}>
            <Grid container sx={{
                width: '100%',
                height: '120px',
                background: '#1D1029',
                display: 'flex',
                padding: '10px',
                position: 'relative',
                justifyContent: 'space-between'
            }}>
                <IconButton onClick={handleBack} sx={{ alignItems: 'flex-start', color: "#fff" }}>
                    <ArrowBack />
                </IconButton>

                <Typography variant='h6' sx={{
                    mb: 1,
                    fontFamily: "Outfit",
                    fontWeight: '500',
                    color: '#fff'
                }}>
                    Profile
                </Typography>
                <IconButton
                    size="large"
                    aria-label="show notifications"
                    color="inherit"
                    onClick={handleNotificationClick}
                    sx={{ alignItems: 'flex-start', color: '#fff' }}
                >
                    <Badge badgeContent={userData.notifications ? userData.notifications.length : 0} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid sx={{
                position: 'absolute',
                top: '120px',
                width: '100%',
                display: 'flex',
                pl: 2
            }}>
                <Avatar alt="" src={userData.avatar} sx={{
                    width: '80px',
                    height: '80px',
                    marginTop: '-40px',
                    zIndex: '999'
                }} />
            </Grid>

            <Grid sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '60px 20px 20px',
                position: 'relative',
            }}>
                <Typography sx={{
                    fontFamily: "Outfit",
                    fontWeight: '800',
                    fontSize: '28px',
                    color: '#1D1029'
                }}
                >
                    {userData.fullName}
                </Typography>
                <Typography sx={{
                    mb: 1,
                    fontFamily: "Outfit",
                    fontWeight: '400',
                    color: '#1D1029'
                }}
                >
                    @{userData.username}
                </Typography>
                <IconButton
                    onClick={handleEditProfile}
                    sx={{
                        background: '#d0d0d0',
                        borderRadius: '50%',
                        width: 35,
                        height: 35,
                        '&:hover': {
                            background: '#1D1029',
                        }
                    }}
                >
                    <Edit sx={{ color: '#fff' }} />
                </IconButton>
            </Grid>

            <Grid sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 3
            }}>
                <IconButton
                    onClick={handleAccountInfo}
                    sx={{ ...styleProfileBtn }}>
                    <Box sx={{ display: 'flex' }}>
                        <Person sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>Account Info</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
                <IconButton
                    onClick={handleCardsPage}
                    sx={{ ...styleProfileBtn }}>
                    <Box sx={{ display: 'flex' }}>
                        <CreditCard sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>My Cards</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
                <IconButton
                    onClick={handleSettings}
                    sx={{ ...styleProfileBtn }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Settings sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>Settings</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
                <IconButton sx={{ ...styleProfileBtn }}>
                    <Box sx={{ display: 'flex' }}>
                        <Help sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>Help Center</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
                <IconButton sx={{ ...styleProfileBtn }}>
                    <Box sx={{ display: 'flex' }}>
                        <Delete sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>Close Your Account</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
                <IconButton
                    onClick={handleLogout}
                    sx={{ ...styleProfileBtn }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <ExitToApp sx={{ ...iconStyle }} />
                        <Typography sx={{ ...txtStyle }}>Log Out</Typography>
                    </Box>
                    <ChevronRight sx={{ fontSize: '16px' }} />
                </IconButton>
            </Grid>
            <LogOutConfirm
                open={isLogOutConfirmOpen}
                onClose={handleCancelLogout}
                onConfirm={handleConfirmLogout}
            />
        </Grid>
    );
}

export default Profile;
