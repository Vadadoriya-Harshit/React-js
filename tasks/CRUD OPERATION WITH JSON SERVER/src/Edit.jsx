import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function EmpEdit() {
  const { empId } = useParams();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/Employe/${empId}`).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, [empId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Empdata = { id, name, email, phone };

    axios.put(`http://localhost:8000/Employe/${empId}`, Empdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      alert("Updated Successfully ...!", navigate('/'));
    });
  };

  return (
    <Container>
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Edit Employee
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="ID"
                      disabled
                      value={id}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="success" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" fullWidth>
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
  );
}

export default EmpEdit;
