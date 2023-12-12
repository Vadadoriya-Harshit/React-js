import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function View() {
  const { empId } = useParams();
  const go = useNavigate();
  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/Employe/${empId}`).then((res) => {
      setViewData(res.data);
    });
  }, [empId]);

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          View Profile:
        </Typography>
        {viewData ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>{viewData.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{viewData.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{viewData.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>{viewData.phone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Box mt={3}>
            <CircularProgress />
          </Box>
        )}
        <Box mt={3}>
          <Button variant="contained" onClick={() => go('/')} color="primary">
            Go Back
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default View;
