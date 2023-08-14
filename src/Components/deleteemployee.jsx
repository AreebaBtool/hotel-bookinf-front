import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
const DeleteEmployee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      // https://shiny-complex-barge.glitch.me/getusers
      const response = await fetch("https://nasal-shining-eris.glitch.me/getemployeedata");
      const data = await response.json();
      setData(data);
      // console.log(data);
    }
    getData();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`https://nasal-shining-eris.glitch.me/getemployeedata/${employeeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted employee from the state
        setData(data.filter((item) => item._id !== employeeId));
      } else {
        console.error('Failed to delete employee');
      }
      Swal.fire('Successful', 'Employee deleted successfully', 'success').then(response => {
        window.location.href = '/login';
      })
    }
    catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name} - {item.email}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteEmployee;
