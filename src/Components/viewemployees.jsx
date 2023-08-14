import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ViewEmployees() {
  const [data, setData] = useState([]);
  // const [employeeId, setEmployeeId] = useState('');
  // const{id}=useParams();
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
        setData(data.filter((item) => item._id !== employeeId));
      } else {
        console.error('Failed to delete employee');
      }
      Swal.fire('Successful', 'Employee deleted successfully', 'success').then(response => {
        window.location.href = '/viewemployees';
      })
    } catch (error) {
      Swal.fire('Oops', 'Something went wrong..', 'error').then(response => {
        window.location.href = '/viewemployees';
      })
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <MDBRow className='row-cols-1 row-cols-md-4 g-4 bs ' style={{ margin: "30px" }}>
      <Link to='/rooms'>
        <button type="button" class="btn  btn-rounded" style={{backgroundColor:"red"}}> <i class="far fa-circle-left" style={{ fontSize: "20px", color: "white"}}>BACK </i></button>
      </Link>
      {data.map((item, index) => (
        <MDBCol>
          <MDBCard className="h-100" style={{ width: "300px", height: "400px" }}>
            <MDBCardImage
              // https://shiny-complex-barge.glitch.me/images/${item.profileImg}
              src={`https://nasal-shining-eris.glitch.me/images/${item.profileImg}`}
              alt='...'
              position='top'
              style={{ width: "300px", height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle style={{ justifyContent: "left" }}>Name:{item.name}</MDBCardTitle>
              <MDBCardText  >
                <b> <p>Email:{item.email}</p>
                  <p>CNIC:{item.cnic}</p>
                  <p>Contact Number:{item.phonenumber}</p>
                  <p>Salary:{item.salary}</p>
                </b>
              </MDBCardText>
              {/* <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }} href='/deleteemployee'>Delete Employees</MDBBtn> */}
              <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }} onClick={() => handleDelete(item._id)}>Delete Employees</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}


    </MDBRow>
  );
}