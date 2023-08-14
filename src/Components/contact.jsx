import React from 'react';
import Navbar from './navbar';
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
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
export default function Contact() {
  const history = useHistory();

  const [formValues, setFormValues] = useState({

    name: '',
    email: '',
    guests: '',
    adate: '',
    ddate: '',
    notes: '',

  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, guests, adate, ddate, notes } = formValues;

    // Check if all fields are filled
    if (name.trim() === '' || email.trim() === '' || guests.trim() === '' || adate.trim() === '' || ddate.trim() === '' || notes.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Fields Missing',
        text: 'Please fill in all fields.',
      });
    } else {
      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Received Response!',
        text: 'Click OK to continue.',
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to a new page
         window.location.href='/contact'
        }
      });
    }
  };


  return (
   
    < MDBContainer  >
      <center>
        <MDBCard className='text-black bs' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "500px" }} >

          <MDBCardBody style={{ backgroundColor: "rgba(135, 6, 6, 0.478)" }}>
            <MDBRow >
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              <form action="https://nasal-shining-eris.glitch.me/contact" method='post' encType='multipart/form-data' className='my-form-container'>
                <MDBCol >
                  <MDBRow> <MDBCardTitle style={{ color: "black", fontSize: "13px", fontFamily: "sans-serif", marginTop: "30px" }}>CONTACT FORM</MDBCardTitle></MDBRow>
                  <MDBRow> <MDBCardTitle style={{ color: "black", fontSize: "30px", fontFamily: "sans-serif", marginBottom: "50px" }}>Get in Touch</MDBCardTitle></MDBRow>
                  <div className='d-flex flex-row align-items-center mb-4' >
                    <MDBIcon fas icon="user-alt" />
                    <  MDBInput label='Name' id='typeText' type='text' name='name' value={formValues.name}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="envelope" />
                    <MDBInput label='Email ' id='typeEmail' type='email' name='email' value={formValues.email}
                      onChange={handleChange}  required/>
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="users" />
                    <MDBInput label='Number of Guests' id='typeNumber' type='number' name='guests' value={formValues.guests}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="calendar-day" />
                    <MDBInput label='Arrival Date' id='typeNumber' type='date' name='adate' value={formValues.adate}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="calendar-check" />
                    <MDBInput label='Departure Date' id='typeNumber' type='date' name='ddate' value={formValues.ddate}
                      onChange={handleChange} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="bars" />
                    <MDBInput label='Special Notes' id='typetext' type='text' name='notes' alue={formValues.notes}
                      onChange={handleChange} required />
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <MDBBtn style={{ backgroundColor: "rgba(251, 200, 104, 0.774)", width: '400px' }} onClick={handleSubmit}>Send Now</MDBBtn>
                    </MDBCol>
                  </div>
                </MDBCol>
              </form>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </center>
    </MDBContainer>

  );
}
