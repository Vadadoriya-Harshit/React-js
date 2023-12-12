import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';

function Edit() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  const navigate = useNavigate();
  const { postid } = useParams();

  const newPost = { id, title, body };

  useEffect(() => {
    // Fetch data from the JSON server
    fetch('http://localhost:8000/posts/' + postid)
      .then((res) => res.json())
      .then((data) => {
        // Set the retrieved data in the state
        setId(data.id);
        setTitle(data.title);
        setbody(data.body);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [postid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/posts/' + postid, {
      method: 'PUT',
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
        alert('Post Edited successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error editing post:', error);
        alert('Failed to edit post. Please try again.');
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Your Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="id"
          label="Id"
          value={id}
          disabled
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="title"
          label="Title"
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
          onChange={(e) => setbody(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginRight: '8px' }}>
          Submit
        </Button>
        <Link to="/">
          <Button variant="contained" color="secondary">
            Go Back
          </Button>
        </Link>
      </form>
    </Container>
  );
}

export default Edit;
