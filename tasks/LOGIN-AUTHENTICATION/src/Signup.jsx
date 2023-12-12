// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import SignIn from "./Loginform";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useState } from "react";

// export const box = createContext();
// export default function SignUp() {
  
// function validateEmail(email) {
//   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   return emailRegex.test(email);
// }

// function validatePassword(password) {
//   return password.length >= 8;
// }

// const theme1 = createTheme({
//   palette: {
//     primary: {
//       main: "#8B54CD", // Blue primary color
//     },
//   },
// });
//   const [formData, setFormData] = React.useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const canReg = formData.firstName && formData.lastName && formData.email && formData.password && formData.confirmPassword;
//   const [errors, setErrors] = React.useState({});
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//    const [showreg,setshowreg] = useState(true);
//    const [showlog,setshowlog] = useState(false);

//   const handleSubmit = (event) => {
//      event.preventDefault();
//     const newErrors = {};
//     setshowlog(true);
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });

//     if (!formData.firstName) {
//       newErrors.firstName = 'First Name is required';
//     }

//     if (!formData.lastName) {
//       newErrors.lastName = 'Last Name is required';
//     }

//     if (!validateEmail(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!validatePassword(formData.password)) {
//       newErrors.password = 'Password must be at least 8 characters long';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       // No errors, the form is valid, you can submit or perform other actions here.
//       console.log(formData);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     // Clear the error when the user starts typing
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: '',
//       });
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <> 
// <box.Provider value={{showlog,setshowlog}}>  

// {
//   console.log(showlog)
// }
// {showlog ? (
//   <SignIn />
// ) : (
//   <ThemeProvider theme={theme1}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <form onSubmit={handleSubmit} method="get">
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   error={!!errors.lastName}
//                   helperText={errors.lastName}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={!!errors.email}
//                   helperText={errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   autoComplete="new-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   error={!!errors.password}
//                   helperText={errors.password}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={toggleShowPassword}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="confirmPassword"
//                   label="Confirm Password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   id="confirmPassword"
//                   autoComplete="new-password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   error={!!errors.confirmPassword}
//                   helperText={errors.confirmPassword}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={toggleShowConfirmPassword}>
//                           {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox value="allowExtraEmails" color="primary" />
//                   }
//                   label="I want to receive inspiration, marketing promotions, and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={!canReg}>
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Container>
//     </ThemeProvider>
// )}
// </box.Provider>
     




  
  
//     </>
//   );
// }
