import {useContext, useRef, useState} from 'react';
import {Routes, Route,Outlet } from "react-router-dom";
// import {Link} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import user from './Signup';

function SignIn() {
  const box = useContext(user);
  const model = useRef();
  const defaultTheme = createTheme();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const validateEmail = () => {
    if (!formData.email) {
      setErrors((prevState) => ({ ...prevState, email: 'Email is required' }));
    } else {
      setErrors((prevState) => ({ ...prevState, email: '' }));
    }
  };

  const validatePassword = () => {
    if (!formData.password) {
      setErrors((prevState) => ({ ...prevState, password: 'Password is required' }));
    } else if (formData.password.length < 8) {
      setErrors((prevState) => ({ ...prevState, password: 'Password must be at least 8 characters' }));
    } else {
      setErrors((prevState) => ({ ...prevState, password: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();

    if (!errors.email && !errors.password) {
      // Validation passed, you can proceed with form submission
      console.log({
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
   <>
      <ThemeProvider theme={defaultTheme}>
      
      <Container component="main" maxWidth="xs" className='' >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
              onBlur={validateEmail}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={validatePassword}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className='text-decoration-none' >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/newapp" href="#" variant="body2" className='text-decoration-none text-dark' >
                  {"Don't have an account? "}
             
                  {/* <span className='text-primary'>
                    Sign Up
                    </span> */}
                </Link>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
     
    </ThemeProvider>
  
   </>
  );
}

export default SignIn;
