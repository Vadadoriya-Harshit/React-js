import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { Paginator } from 'primereact/paginator';
        


function Empdetailst() {
  const [empData, setEmpdata] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
};
  useEffect(() => {
    axios.get("http://localhost:8000/Employe")
      .then((res) => {
        setEmpdata(res.data);
      })
      .catch(error => {
        console.error('Error fetching employee data: ', error);
      });
  }, []);

  const handleView = (id) => {
    navigate("/View/" + id);
  };

  const handleEdit = (id) => {
    navigate("/Edit/" + id);
  }; 
   const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(empData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'employees.xlsx');
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure...?")) {
      axios.delete(`http://localhost:8000/Employe/${id}`)
        .then(() => {
          alert("Employee Deleted ....!");
          setEmpdata(empData.filter((emp) => emp.id !== id));
        })
        .catch(error => {
          console.error('Error deleting employee: ', error);
        });
    }
  };



  const actionBodyTemplate = (rowData) => {
    return (
      <div className="d-flex justify-content-between col-6">
        <IconButton aria-label="edit" onClick={() => handleEdit(rowData.id)}>
          <EditIcon style={{ color: 'blue' }} />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => handleDelete(rowData.id)}>
          <DeleteIcon style={{ color: 'red' }} />
        </IconButton>

        <IconButton aria-label="view" onClick={() => handleView(rowData.id)}>
          <VisibilityIcon style={{ color: 'green' }} />
        </IconButton>
      </div>
    );
  };

  const header = (
    <div className="table-header">
      <h1>Employee List</h1>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
        <Link to="/create" className="btn btn-warning m-3">
          <AddIcon style={{ marginRight: '5px' }} />
          Add New Employee
        </Link>
        <IconButton className='bg-muted' aria-label="export-excel" onClick={exportToExcel}>
          <FileDownloadIcon style={{ color: 'blue' }} />
        </IconButton>
      </span>
    </div>
  );

  const filterData = () => {
    return empData.filter((data) => {
      return (
        data.id.toString().includes(globalFilter) ||
        data.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
        data.email.toLowerCase().includes(globalFilter.toLowerCase()) ||
        data.phone.toString().includes(globalFilter)
      );
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <DataTable
            value={filterData()}
            header={header}
            emptyMessage="No records found"
          >
            <Column field="id" header="ID" sortable></Column>
            <Column field="name" header="NAME" sortable></Column>
            <Column field="email" header="EMAIL" sortable></Column>
            <Column field="phone" header="PHONE" sortable></Column>
            <Column body={actionBodyTemplate} header="ACTIONS"></Column>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />

          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Empdetailst;
