import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import onBoardOne from "../../../../assets/onBoardingImg/onBoardOne.png";
import onBoardSecond from "../../../../assets/onBoardingImg/onBoardSecond.png";
import onBoardTherd from "../../../../assets/onBoardingImg/onBoardTherd.png";
import './onBoarding.scss';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import { Avatar, Box, Grid } from '@mui/material';
import Logo from "../../../../assets/image/ParuPayLogo.png";
import { Link } from 'react-router-dom';

function OnBoarding() {

    return (
        <div className='container'>
            <Grid item xs={12} md={5}>
                <Box
                    sx={{
                        my: 3,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{
                        m: 1,
                        p: 2,
                        bgcolor: '#1D1029',
                        width: 70,
                        height: 70
                    }}
                    >
                        <img src={Logo} alt="Parupay" />
                    </Avatar>
                </Box>
            </Grid>

            <div className='row onBoarding'>
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showIndicators={false}
                    interval={3000}
                    autoPlay={true}
                    showStatus={false}
                    className="custom-carousel"
                >
                    <div className='sliderContainer'>
                        <img src={onBoardOne} alt="" />
                        <h3>Add all accounts & manage</h3>
                        <p>You can add all accounts in one place and use it to send and request.</p>
                    </div>
                    <div>
                        <img src={onBoardSecond} alt="" />
                        <h3>Track your activity</h3>
                        <p>You can track your income, expenses activities and all statistics.</p>
                    </div>
                    <div>
                        <img src={onBoardTherd} alt="" />
                        <h3>Send & request payments</h3>
                        <p>You can send or receive any payments from your accounts.</p>
                    </div>
                </Carousel>
            </div>
            <div className='btnCon'>
                <Link to="/welcome">
                    <PrimaryBtn
                        text={"Get Started"}
                        fullWidth
                    />
                </Link>

            </div>

        </div>
    );
}

export default OnBoarding;
