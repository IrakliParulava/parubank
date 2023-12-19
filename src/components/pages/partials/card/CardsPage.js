import React from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import ParuPayLogo from "../../../../assets/image/ParuPayLogo.png";
import VisaLogo from '../../../../assets/card/VisaLogo.png';
import chip from '../../../../assets/card/Rectangle.png';
import HeaderPrivate from "../header/HeaderPrivate";

function CardsPage() {

    return (
        <Grid>
            <HeaderPrivate title={'Card Page'} />
            <Grid sx={{ 
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                alignItems: 'center',
                pt: 7,
                pb: 5 
            }}>
                <Grid sx={{ mt: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '330px', p: 1, justifyContent: 'space-between' }}>
                        <Typography>Banks and cards</Typography>
                        <IconButton >
                            
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

                <Grid sx={{ mt: 4 }}>
                    
                    <Box sx={{
                        width: "350px",
                        height: "200px",
                        background: 'linear-gradient(to bottom right, #EC1B69 50%, #de4d82 50%)',
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
                                        width: '14%',
                                        height: 'auto',
                                        padding: '5px',
                                        background: '#fff',
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
                                3177 2134 7349 0087
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            mt: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: '#1D1029',
                            fontFamily: "Outfit",
                            fontWeight: '800',
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
                            <Typography>12/25</Typography>
                        </Grid>
                    </Box>
                </Grid>

                <Grid sx={{ mt: 4 }}>
                    
                    <Box sx={{
                        width: "350px",
                        height: "200px",
                        background: 'linear-gradient(to bottom right, #1D1029 50%, #EC1B69 50%)',
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
                                        width: '14%',
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
                                5212 1001 2184 3007
                            </Typography>
                        </Grid>
                        <Grid sx={{
                            mt: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: '#fff',
                            fontFamily: "Outfit",
                            fontWeight: '800',
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
                            <Typography>08/31</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default CardsPage;