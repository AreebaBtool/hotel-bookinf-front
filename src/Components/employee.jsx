import React from 'react';
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

export default function Employee() {
  return (

    < MDBContainer fluid >
      <center>
        <MDBCard className='text-black' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "500px" }} >

          <MDBCardBody>
            <MDBRow>
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              <form action="https://nasal-shining-eris.glitch.me/employee" method='post' encType='multipart/form-data' className='my-form-container'>
                <MDBCol >
                  <MDBRow> <MDBCardTitle style={{ color: "darkgoldenrod" }}>Add Employee!</MDBCardTitle></MDBRow>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="user-alt" />
                    <  MDBInput label='Name' id='typeText' type='text' name='name' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="envelope" />
                    <MDBInput label='Email ' id='typeEmail' type='email' name='email' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="phone" />
                    <MDBInput label='Contact No' id='typeNumber' type='number' name='phonenumber' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon="digital-tachograph" />
                    <MDBInput label='CNIC' id='typeNumber' type='number' name='cnic' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon="hand-holding-usd" />
                    <MDBInput label='Salary' id='typeNumber' type='number' name='salary' required />
                  </div>
                  <div style={{ margin: "10px" }} className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="file" />
                    <MDBFile id='customFile' type='file' name='profileImg' />
                  </div>
                  {/* <div  style={{ margin: "10px" }}>
                    <MDBFile  id='customFile' type='file' name='profileImg2' />
                  </div> */}
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                        <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }} >Register Employee</MDBBtn>
                    </MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <Link to="/viewemployees">
                        <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }}>View Employees</MDBBtn>
                      </Link>
                    </MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <Link to="/rooms">
                      <button type="button" class="btn btn-dark btn-rounded"> <i class="far fa-circle-left" style={{ fontSize: "20px", color: "white" }}>BACK </i></button>
                      </Link>
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
