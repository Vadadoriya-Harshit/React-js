import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Home from './Home';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  welcomePanel: {
    padding: theme.spacing(4),
    textAlign: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
}));

const WelcomePage = () => {
  const classes = useStyles();

  const panelVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>  
    <Home/>
    
    <div className={classes.root}>
      <motion.div
        className={classes.welcomePanel}
        initial="initial"
        animate="animate"
        variants={panelVariants}
      >
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome back, User!
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Box>
        </Container>
      </motion.div>
    </div>
    </>
   
  );
};

export default WelcomePage;
