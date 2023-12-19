import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Grid, IconButton, Paper, Tab, Tabs, Typography } from '@mui/material';
import MobileMenu from '../../partials/navigation/MobileMenu';
import ParuPayLogo from "../../../../assets/image/ParuPayLogo.png";
import { AddBox } from '@mui/icons-material';
import Transactions from '../transactions/Transactions';
import Requests from '../../../../services/requests';
import AddCard from '../../partials/card/AddCard';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import VisaLogo from '../../../../assets/card/VisaLogo.png';
import chip from '../../../../assets/card/Rectangle.png';
import rewards from '../../../../assets/rewards/rewards.PNG'
import SliderAds from '../../partials/slider/SliderAds';

function Wallet(props) {
    const [value, setValue] = useState(0);
    const [userData, setUserData] = useState({});
    const requests = useMemo(() => new Requests(), []);
    const [isAddCardOpen, setAddCardOpen] = useState(false);
    const [cards, setCards] = useState([]);

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabTxtStyle = {
        borderRadius: '35px',
        textTransform: 'initial',
        fontFamily: "Outfit",
        fontWeight: '500',
        fontSize: '14px',
        color: '#1D1029',
    };

    const handleAddCardOpen = () => {
        setAddCardOpen(true);
    };

    const handleAddCardClose = () => {
        setAddCardOpen(false);
    };

    const handleLinkCard = (newCard) => {
        setCards([...cards, newCard]);
        handleAddCardClose();
    };

    return (
        <Grid>
            <HeaderPrivate title={'Wallet'} />
            <Paper sx={{
                background: 'transparent',
                boxShadow: 'none',
                padding: '80px 15px 0 15px',
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor=""
                >
                    <Tab
                        label="Wallet"
                        style={{
                            backgroundColor: value === 0 ? '#F05B57' : 'transparent',
                            boxShadow: value === 0 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle,
                        }}
                    />
                    <Tab
                        label="Rewards"
                        style={{
                            backgroundColor: value === 1 ? '#F05B57' : 'transparent',
                            boxShadow: value === 1 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle,
                        }}
                    />
                    <Tab
                        label="Transactions"
                        style={{
                            backgroundColor: value === 2 ? '#F05B57' : 'transparent',
                            boxShadow: value === 2 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle,
                        }}
                    />
                </Tabs>
            </Paper>

            {value === 0 && (
                <Grid container sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    mb: 15,
                }}>
                    <Grid sx={{
                        mt: 2,
                        width: "340px",
                        height: "180px",
                        background: "#fff",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        borderRadius: "15px",
                    }}>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: '270px',
                            p: 2,
                            justifyContent: 'space-between',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Avatar
                                    alt=''
                                    src={ParuPayLogo}
                                    sx={{
                                        width: '10%',
                                        height: 'auto',
                                    }}
                                />

                                <Typography sx={{
                                    ml: 1,
                                    fontFamily: "Outfit",
                                    fontWeight: '800',
                                    fontSize: '14px',
                                }}>
                                    ParuPay Balance
                                </Typography>
                            </Box>

                            <Typography sx={{
                                fontFamily: "Outfit",
                                fontWeight: '500',
                                fontSize: '14px',
                            }}>
                                ${userData.balance}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography sx={{
                                pt: 2,
                                pl: 2,
                                fontFamily: "Outfit",
                                fontWeight: '800',
                                fontSize: '50px',
                            }}>
                                ${userData.balance}.00
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '330px', p: 1, justifyContent: 'space-between' }}>
                            <Typography>Banks and cards</Typography>
                            <IconButton onClick={handleAddCardOpen}>
                                <AddBox />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            width: "350px",
                            height: "200px",
                            background: 'linear-gradient(to bottom right, #1D1029 50%, #221231 50%)',
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            borderRadius: "15px",
                            padding: '15px 20px'
                        }}>
                            <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                Width: '300px',
                                justifyContent: 'space-between',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Avatar
                                        alt=''
                                        src={ParuPayLogo}
                                        sx={{
                                            width: '10%',
                                            height: 'auto',
                                        }}
                                    />

                                    <Typography sx={{
                                        ml: 1,
                                        fontFamily: "Outfit",
                                        fontWeight: '800',
                                        fontSize: '14px',
                                        color: '#fff'
                                    }}>
                                        ParuPay
                                    </Typography>
                                </Box>

                                <img
                                    alt=''
                                    src={VisaLogo}
                                />
                            </Grid>

                            <Grid sx={{ mt: 3 }}>
                                <img
                                    alt=''
                                    src={chip}
                                />
                            </Grid>

                            <Grid>
                                <Typography sx={{
                                    mt: 1,
                                    color: '#fff',
                                    fontFamily: "Outfit",
                                    fontWeight: '800',
                                    fontSize: '14px',
                                }}>
                                    4251 1001 1087 4723
                                </Typography>
                            </Grid>
                            <Grid sx={{
                                mt: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                color: '#EC1B69',
                                fontFamily: "Outfit",
                                fontWeight: '400',
                                fontSize: '10px',
                            }}>
                                <Typography>Card Holder</Typography>
                                <Typography>Exp. Date</Typography>
                            </Grid>

                            <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                color: '#fff',
                                fontFamily: "Outfit",
                                fontWeight: '700',
                                fontSize: '14px',
                            }}>
                                <Typography>Irakli Parulava</Typography>
                                <Typography>05/28</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            )}
            {value === 1 &&
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box sx={{ mt: 3 }}>
                        <img
                            alt='rewards'
                            src={rewards}
                            style={{ width: '300px' }}
                        />
                    </Box>
                    <Box sx={{ width: '270px', mt: 3 }}>
                        <Typography sx={{ textAlign: 'center' }}>
                            Discover new ParuPay rewards and view your saved offers here
                        </Typography>
                    </Box>

                    <SliderAds />
                </Grid>
            }
            {value === 2 && (
                <Transactions />
            )}
            <AddCard open={isAddCardOpen} handleClose={handleAddCardClose} handleLinkCard={handleLinkCard} />
            <MobileMenu />
        </Grid>
    );
}

export default Wallet;
