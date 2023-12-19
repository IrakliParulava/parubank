import { Alert, AlertTitle, Button, Container, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <Container component="main" maxWidth="xs">
                <Typography variant="h5" color="error" gutterBottom>
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" paragraph>
                    The page you are looking for might be temporarily unavailable or doesn't exist.
                </Typography>
                <Button onClick={handleBack} sx={{ backgroundColor: '#1D1029', color: 'white' }}>
                    Go back
                </Button>
            </Container>
        </Alert>
    );
}

export default ErrorPage;