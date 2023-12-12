import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, TextareaAutosize, Container } from '@mui/material';

function Create() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const newPost = { id, title, body };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add post');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Post added successfully:', data);
        alert('Post added successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding post:', error);
        alert('Failed to add post. Please try again.');
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Create Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          multiline
          rows={6}
          margin="normal"
          id="posts"
          label="Post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginRight: '8px' }}>
          Submit
        </Button>
        <Link to="/">
          <Button variant="outlined" color="secondary">
            Go Back
          </Button>
        </Link>
      </form>
    </Container>
  );
}

export default Create;
