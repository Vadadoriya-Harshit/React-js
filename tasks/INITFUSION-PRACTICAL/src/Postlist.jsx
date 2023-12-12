import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Postlist() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the JSON server
    fetch('http://localhost:8000/posts')
      .then((res) => res.json())
      .then((data) => {
        // Set the retrieved data in the state
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const loadPost = (id) => {
    navigate('/View/' + id);
  };

  const loadEdit = (id) => {
    navigate('/Edit/' + id);
  };

  const loadDelete = (id) => {
    if (window.confirm('Are You Sure?')) {
      fetch('http://localhost:8000/posts/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert('Post Deleted Successfully!');
          navigate('/');
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
          alert('Failed to delete post. Please try again.');
        });
    }
    window.location.reload();
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Json Server CRUD App
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Post List
      </Typography>
      <Link to="/Create">
        <Button variant="contained" color="primary" fullWidth>
          Add Posts(+)
        </Button>
      </Link>
      <TableContainer>
        <Table className='text-center'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>POSTS</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => loadEdit(post.id)}
                    startIcon={<EditIcon />}
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => loadDelete(post.id)}
                    startIcon={<DeleteIcon />}
                    style={{ marginRight: '8px' }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => loadPost(post.id)}
                    startIcon={<VisibilityIcon />}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Postlist;
