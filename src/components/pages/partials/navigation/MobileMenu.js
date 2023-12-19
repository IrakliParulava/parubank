import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Payment, AccountBalanceWallet } from '@mui/icons-material';

function MobileMenu() {
    const [activeMenu, setActiveMenu] = useState('Home');

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    };

    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 2,
            background: '#fff',
            zIndex: 999,
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            boxShadow: '0px 0px 4px 3px rgba(0,0,0,0.1)',
        }}>
            <Box
                sx={{
                    width: '350px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 1,
                    background: '#1d102914',
                    zIndex: 999,
                    borderRadius: '15px',
                }}
            >
                <Link to="/dashboard">
                    <Box
                        onClick={() => handleMenuClick('Home')}
                        sx={{
                            textAlign: 'center',
                            color: activeMenu === 'Home' ? '#1D1029' : '#1D1029',
                            opacity: activeMenu === 'Home' ? 1 : 0.5,
                            textDecoration: 'none',
                        }}
                    >
                        <IconButton>
                            <Home />
                        </IconButton>
                        <Typography sx={{
                            opacity: activeMenu === 'Payments' ? 1 : 0.5,
                            fontFamily: "Outfit",
                            fontSize: '14px',
                            fontWeight: '700'
                        }}
                        >
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Link to='/payment'>
                    <Box
                        onClick={() => handleMenuClick('Payments')}
                        sx={{
                            textAlign: 'center',
                            color: activeMenu === 'Payments' ? '#1D1029' : '#1D1029',
                            opacity: activeMenu === 'Payments' ? 1 : 0.5,
                        }}
                    >
                        <IconButton>
                            <Payment />
                        </IconButton>
                        <Typography sx={{
                            opacity: activeMenu === 'Payments' ? 1 : 0.5,
                            fontFamily: "Outfit",
                            fontSize: '14px',
                            fontWeight: '700'
                        }}
                        >
                            Payments
                        </Typography>
                    </Box>
                </Link>

                <Link to='/wallet'>
                    <Box
                        onClick={() => handleMenuClick('Wallet')}
                        sx={{
                            textAlign: 'center',
                            color: activeMenu === 'Wallet' ? '#1D1029' : '#1D1029',
                            opacity: activeMenu === 'Wallet' ? 1 : 0.5,
                        }}
                    >
                        <IconButton>
                            <AccountBalanceWallet />
                        </IconButton>
                        <Typography sx={{
                            opacity: activeMenu === 'Payments' ? 1 : 0.5,
                            fontFamily: "Outfit",
                            fontSize: '14px',
                            fontWeight: '700'
                        }}
                        >
                            Wallet
                        </Typography>
                    </Box>
                </Link>

            </Box>
        </Box>

    );
}

export default MobileMenu;
