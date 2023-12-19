import React, { useEffect, useMemo, useState } from 'react';
import MobileMenu from "../../partials/navigation/MobileMenu";
import { Avatar, Badge, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Requests from "../../../../services/requests";
import { Link, useNavigate } from 'react-router-dom';
import LastTransactions from '../transactions/LastTransaction';

function Dashboard(props) {
    const [userData, setUserData] = useState({});
    const requests = useMemo(() => new Requests(), []);

    const navigate = useNavigate();

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


    return (
        <Grid container sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'
        }}
        >
            <Box sx={{
                background: 'linear-gradient(to bottom right, #1D1029 50%, #221231 50%)',
                p: 3,
                width: "100%",
                height: "250px",
                color: '#fff'
            }}
            >
                <Grid sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minWidth: '300px',
                    justifyContent: 'space-between'
                }}
                >
                    <Typography>
                        Dashboard
                    </Typography>
                    <Link to="/profile/:id">
                        <Avatar alt="" src={userData.avatar} />
                    </Link>
                </Grid>

                <Grid sx={{ mt: 4 }}>
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: '200',
                        opacity: '0.4'
                    }}
                    >
                        Hi, {userData.username}
                    </Typography>

                    <Typography sx={{
                        mt: 2,
                        fontFamily: "Outfit",
                        fontWeight: '700',
                        fontSize: '20px'
                    }}
                    >
                        Total Balance
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            fontSize={40}
                            fontFamily={"Outfit"}
                            fontWeight={600}
                            color="#fff"
                        >
                            ${userData.balance}.00
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="show notifications"
                            color="inherit"
                            onClick={handleNotificationClick}
                        >
                            <Badge badgeContent={userData.notifications ? userData.notifications.length : 0} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Grid>
            </Box>

            <Box sx={{ p: 2, mt: 2, }}>
                <Link to='/sendMoney'>
                    <Button sx={{
                        mr: 2,
                        backgroundColor: '#EC1B69',
                        color: '#1D1029',
                        width: '150px',
                        fontFamily: "Outfit",
                        fontSize: '14px',
                        textTransform: 'initial'
                    }}
                    >
                        Send Money
                    </Button>
                </Link>

                <Link to='/requestMoney'>
                    <Button sx={{
                        backgroundColor: '#1D1029',
                        color: '#fff',
                        width: '150px',
                        fontFamily: "Outfit",
                        fontSize: '14px',
                        textTransform: 'initial'
                    }}
                    >
                        Request Money
                    </Button>
                </Link>

            </Box>

            <Box sx={{ mt: 2 }}>

                <Grid sx={{ width: '100%', mb: 9 }}>
                    <LastTransactions />
                </Grid>
            </Box>
            <MobileMenu />
        </Grid>
    );
}

export default Dashboard;