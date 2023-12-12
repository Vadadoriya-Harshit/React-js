import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getlist()
  }, []); 

  const getlist = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) =>{
      setPosts(data);
      console.log(data);
    })
    .catch((error) => console.log('Error fetching data:', error));
  }

  const handleEdit = (postId) => {
  
  };

  const handleDelete = (postId) => {
   
  };

  const handleView = (postId) => {
   
  };

  return (
    <Container>
      <h3 className="text-center mb-3">Post List</h3>
      <Link to="/create">
        <Button variant="primary" className="mb-3">Add Post</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>userId: </th>
            <th>id: </th>
            <th>title: </th>
            <th>body: </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Button variant="success" className="me-1" onClick={() => handleEdit(post.id)}>
                  <EditIcon />
                </Button>
                <Button variant="danger" className="me-1" onClick={() => handleDelete(post.id)}>
                  <DeleteIcon />
                </Button>
                <Button variant="warning" onClick={() => handleView(post.id)}>
                  <VisibilityIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PostList;
