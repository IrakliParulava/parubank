import React, { useState } from 'react';
import { Box, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import MobileMenu from '../../partials/navigation/MobileMenu';
import SendMoney from '../sendMoney/SendMoney';
import RequestMoney from '../requestMoney/RequestMoney';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import imgBills from '../../../../assets/bills/bills.png'
import SliderAds from '../../partials/slider/SliderAds';

function Payments(props) {
    const [value, setValue] = useState(0);

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

    return (
        <Grid>
            <HeaderPrivate title={'Payments'} />
            <Paper sx={{
                background: 'transparent',
                boxShadow: 'none',
                padding: '80px 15px 0 15px'
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor=""
                >
                    <Tab
                        label="Send"
                        style={{
                            backgroundColor: value === 0 ? '#F05B57' : 'transparent',
                            boxShadow: value === 0 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle
                        }}
                    />
                    <Tab
                        label="Request"
                        style={{
                            backgroundColor: value === 1 ? '#F05B57' : 'transparent',
                            boxShadow: value === 1 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle
                        }}
                    />
                    <Tab
                        label="Bills"
                        style={{
                            backgroundColor: value === 2 ? '#F05B57' : 'transparent',
                            boxShadow: value === 2 ? 'rgb(0 0 0 / 14%) 0px 0px 2px inset' : 'none',
                            ...tabTxtStyle
                        }}
                    />
                </Tabs>
            </Paper>

            {value === 0 && (
                <SendMoney />
            )}
            {value === 1 && (
                <RequestMoney />
            )}
            {value === 2 &&
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box sx={{ mt: 2 }}>
                        <img
                            alt='bills'
                            src={imgBills}
                            style={{ width: '300px' }}
                        />
                    </Box>
                    <Box sx={{ width: '300px', mt: 2 }}>
                        <Typography sx={{ textAlign: 'center' }}>
                            this is where you'll see bills you can pay with ParuPay, like invoices and subscriptions.
                        </Typography>
                    </Box>

                    <SliderAds />
                </Grid>
            }

            <MobileMenu />
        </Grid>
    );
}

export default Payments;
