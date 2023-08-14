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

export default function HotelRoooms() {
  return (

    < MDBContainer fluid >
      <center>
        <MDBCard className='text-black' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "500px" }} >

          <MDBCardBody>
            <MDBRow>
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              <form action="https://nasal-shining-eris.glitch.me/hotelrooms" method='post' encType='multipart/form-data' className='my-form-container'>
                <MDBCol >
                 

                  <MDBRow> <MDBCardTitle style={{ color: "darkgoldenrod" }}>Add Rooms!</MDBCardTitle></MDBRow>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="hotel" />
                    <  MDBInput label='Name' id='typeText' type='text' name='name' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="bed" />
                    <MDBInput label='Type ' id='typeType' type='text' name='type' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="dollar-sign" />
                    <MDBInput label='Rent per Day' id='typeNumber' type='number' name='rentperday' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="restroom" />
                    <MDBInput label='Maximum Count' id='typeNumber' type='number' name='maxcount' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="sort-alpha-up" />
                    <MDBInput label='Description' id='typetext' type='text' name='description' required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="phone" />
                    <MDBInput label='Phone no.' id='typeNumber' type='number' name='phonenumber' required />
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
                      <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }} >Add Room</MDBBtn>
                    </MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <Link to="/viewhotelrooms">
                        <MDBBtn style={{ backgroundColor: "darkgoldenrod", width: '200px' }}>View Rooms</MDBBtn>
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
