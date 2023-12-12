import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Create() {
  const [id, idChange] = useState('');
  const [name, nameChange] = useState('');
  const [phone, phoneChange] = useState('');
  const [email, emailChange] = useState('');
  const [isActive, setIsActive] = useState(false);

  const employedata = { id, name, email, phone };

  const go = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Employe", employedata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      alert("Data added successfully...!");
      go('/');
    });
  }

  return (
    <Container>
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Add Employee
              </Typography>
              <form onSubmit={handleClick}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="ID"
                      disabled
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      value={name}
                      onChange={(e) => nameChange(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => phoneChange(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                        />
                      }
                      label="Is Active"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary" fullWidth>
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Create;
