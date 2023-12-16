import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the logout icon

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        <Button color="inherit">Dashboard</Button>
        <Link to="/login" className='text-white'>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/Signup" className='text-white'>
          <Button variant="outlined" color="inherit">Sign up</Button>
        </Link>
        {/* Adding the colorful Logout icon */}
        <IconButton style={{ color: 'orange' }} aria-label="logout">
        <Link className='text-danger bg-white rounded-circle px-2 pb-2' to={'/'}>
        <ExitToAppIcon />
        </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
