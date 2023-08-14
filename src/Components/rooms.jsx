import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Rooms() {
    return (
        <div className='bg-image'>
            {/* <Navbar /> */}
            <img src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80' className='img-fluid' alt='Sample' style={{ height: "2000px" }} />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <i class="fas fa-backward"></i>
                <center>
                    <div className='row bs col-md-5' >
                        {/* <p className='text-white mb-0'>Get Started</p> */}
                        <h1 style={{ color: "white", fontFamily: "sans-serif", fontStyle: "italic" }}>Admin Dashboard</h1>
                    </div>
                </center>
                <br /><br /><br /><br /><br />
                {/* <center> */}
                    <div className='row bs justify-content-center '>

                        <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                            <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}><br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>Rooms</span><br /> <br /><span style={{ fontSize: "10px" }}> </span><hr />
                                <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                            <div>
                                <Link to="/hotelrooms">
                                    <button className='btn btn-primary' style={{ backgroundColor: "black", boxShadow: "none", width: '150px', height: '40px', borderBlockColor: "none" }} >Rooms  </button><br /><br />
                                </Link>
                            </div>
                        </div>
                        <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                            <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}><br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>Employees</span><br /> <br /><span style={{ fontSize: "10px" }}></span><hr />
                                <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                            <div>
                                <Link to="/employee">
                                    <button className='btn btn-primary' style={{ backgroundColor: "black", boxShadow: "none", width: '150px', height: '40px', borderBlockColor: "none" }} >Employees  </button><br /><br />
                                </Link>
                            </div>
                        </div>
                        <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                            <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}> <br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>Bookings</span><br /> <br /><span style={{ fontSize: "10px" }}> </span><hr />
                                <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                            <div>
                                <Link to="/viewbookings">
                                    <button className='btn btn-primary' style={{ backgroundColor: "black", boxShadow: "none", width: '150px', height: '40px', borderBlockColor: "none" }} >Bookigs  </button><br /><br />
                                </Link>
                            </div>
                        </div>

                    </div>
                {/* </center> */}
                <br />

            </div>

            <div style={{ marginTop: "30px" }}>  <Footer />
            </div>

        </div>
    );
}