import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

function View() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON server
    fetch(`http://localhost:8000/posts/${postid}`)
      .then((res) => res.json())
      .then((data) => {
        // Set the retrieved data in the state
        setPost(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [postid]);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        View Post
      </Typography>
      {post && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TITLE</TableCell>
                <TableCell>BODY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Link to="/">
        <Button variant="contained" color="primary" size="large" style={{ display: 'block', margin: 'auto', marginTop: '20px' }}>
          Go back
        </Button>
      </Link>
    </div>
  );
}

export default View;
