import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';
import '@mui/material/styles';
import './App.css'; // Your custom CSS file for styling
import Home from './Home';
const WelcomePage = () => {
  return (
    <> 
      <Home/>
    <Container className="welcome-container" maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2" gutterBottom>Welcome, User!</Typography>
          <Typography variant="body1" paragraph>
            You are logged in. Enjoy your stay!
          </Typography>
          <div className="mt-4">
            <Button variant="contained" color="primary" size="large" className="mr-2">
              Explore
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Settings
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default WelcomePage;
