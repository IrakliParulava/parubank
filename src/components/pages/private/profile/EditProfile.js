import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Requests from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';
import EditNameModal from '../../partials/modal/EditNameModal';
import EditAvatarModal from '../../partials/modal/EditAvatarModal';

function EditProfile(props) {
    const [userData, setUserData] = useState({});
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
    const requests = useMemo(() => new Requests(), []);

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

    const handleOpenNameModal = () => {
        setIsNameModalOpen(true);
    };

    const handleCloseNameModal = () => {
        setIsNameModalOpen(false);
    };

    const handleUpdateName = (newName) => {
        setUserData({ ...userData, fullName: newName });

        const token = localStorage.getItem('token');
        if (token) {
            requests.PUT_CHANGE_DATA(token, { fullName: newName })
                .then(updatedUserData => {
                    console.log('User data updated successfully:', updatedUserData);
                })
                .catch(error => {
                    console.error('Error updating user data:', error);
                });
        }

        handleCloseNameModal();
    };

    const handleOpenAvatarModal = () => {
        setIsAvatarModalOpen(true);
    };

    const handleCloseAvatarModal = () => {
        setIsAvatarModalOpen(false);
    };

    const handleUpdateAvatar = (newImage) => {
        setUserData({ ...userData, avatar: newImage });

        const token = localStorage.getItem('token');
        if (token) {
            requests.PUT_CHANGE_AVATAR(token, { avatar: newImage })
                .then(updatedUserData => {
                    console.log('User avatar updated successfully:', updatedUserData);
                })
                .catch(error => {
                    console.error('Error updating user avatar:', error);
                });
        }

        handleCloseAvatarModal();
    };

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
                    Edit your profile
                </Typography>
                <IconButton sx={{ alignItems: 'flex-start', color: "#fff" }}>

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
                }}
                    onClick={handleOpenAvatarModal}
                />
            </Grid>

            <Grid sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '60px 20px 20px',
                position: 'relative',
            }}>
                <Typography
                    onClick={handleOpenNameModal}
                    sx={{
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
            </Grid>
            <EditNameModal open={isNameModalOpen} onClose={handleCloseNameModal} initialName={userData.fullName} onUpdateName={handleUpdateName} />
            <EditAvatarModal open={isAvatarModalOpen} onClose={handleCloseAvatarModal} initialImage={userData.avatar} onUpdateAvatar={handleUpdateAvatar} />
        </Grid>
    );
}

export default EditProfile;
