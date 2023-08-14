import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFile
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const history = useHistory();
  const [formValues, setFormValues] = useState({

    name: '',
    email: '',
    password: '',

  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    const { name, email, password } = formValues;

    // Check if all fields are filled
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Fields Missing',
        text: 'Please fill in all fields.',
      });
    } else {
      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Successfully Registered!',
        text: 'All fields are filled. Click OK to Login first.',
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to a new page
          history.push('/login');
        }
      });
    }
  };


  return (

    < MDBContainer fluid  >
      <center>
        <MDBCard className='text-black' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "450px" }} >

          <MDBCardBody >
            <MDBRow className=' row bs'>
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              {/* <div className=' row bs'> */}
              <form action="https://nasal-shining-eris.glitch.me/register" method='post' encType='multipart/form-data' className='my-form-container'>
                <MDBCol >
                  <MDBRow> <MDBCardTitle className='title' style={{ color: "#0ebebe" }}>Register!</MDBCardTitle></MDBRow>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="user-alt" />
                    <  MDBInput label='Name' id='typeText' type='text' name='name' value={formValues.name}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="envelope" />
                    <MDBInput label='Email ' id='typeEmail' type='email' name='email' value={formValues.email}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="user-lock" />
                    <MDBInput label='Password' id='typePassword' type='password' name='password' value={formValues.password}
                      onChange={handleChange} required />
                  </div>
                  {/* <div style={{ margin: "10px" }} className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="file" />
                    <MDBFile id='customFile' type='file' name='profileImg' required />
                  </div> */}
                  {/* <div  style={{ margin: "10px" }}>
                    <MDBFile  id='customFile' type='file' name='profileImg2' />
                  </div> */}
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <MDBBtn style={{ backgroundColor: "#0ebebe", width: '200px' }} onClick={handleSubmit}>Register</MDBBtn>
                    </MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <Link to="/login">
                        <MDBBtn style={{ backgroundColor: "#0ebebe", width: '200px' }}>Already Registerd?</MDBBtn>
                      </Link>
                    </MDBCol>
                  </div>
                </MDBCol>
              </form>
              {/* </div> */}
            </MDBRow>

          </MDBCardBody>
        </MDBCard>
      </center>
    </MDBContainer>

  );
}
