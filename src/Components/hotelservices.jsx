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


export default function HotelServices() {
    return (
        <div className='bg-image'>
            {/* <Navbar /> */}
            <img src='https://in-cyprus.philenews.com/wp-content/uploads/2020/03/hotel-18.jpg' className='img-fluid' alt='Sample' style={{ height: "2000px" }} />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <center>
                    <div className='row bs col-md-5' >
                        {/* <p className='text-white mb-0'>Get Started</p> */}
                        <h1 style={{ color: "white", fontFamily: "sans-serif", fontStyle: "italic" }}>Hotel Services</h1>
                    </div>
                </center>
                <br /><br /><br /><br /><br />
                <div className='row bs'>

                    <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                        <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}>BASIC <br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>$40.00</span><br /> <br /><span style={{ fontSize: "10px" }}>PER DAY</span><hr />
                            <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                        <div>
                            <Link to='/viewhotelrooms'>
                                <button className='btn btn-primary' style={{ width: "230px", backgroundColor: "black" }}>Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                        <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}>PARKING<br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>$20.00</span><br /> <br /><span style={{ fontSize: "10px" }}>PER DAY</span><hr />
                            <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                        <div>
                            <Link to='/viewhotelrooms'>
                                <button className='btn btn-primary' style={{ width: "230px", backgroundColor: "black" }}>Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                        <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}>RENT A CAR <br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>$30.00</span><br /> <br /><span style={{ fontSize: "10px" }}>PER DAY</span><hr />
                            <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                        <div>
                            <Link to='/viewhotelrooms'>
                                <button className='btn btn-primary' style={{ width: "230px", backgroundColor: "black" }}>Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row bs' style={{ width: "300px", height: "400px", backgroundColor: "burlywood" }}>
                        <h3 style={{ color: "white", fontSize: "13px", textAlign: "start", marginBottom: "5px" }}>ALL INCLUSIVE <br /><span style={{ fontSize: "30px", color: "white", textAlign: "left" }}>$99.90</span><br /> <br /><span style={{ fontSize: "10px" }}>PER DAY</span><hr />
                            <div ><span style={{ fontSize: "15px", color: "black" }}>Lorem ipsum dolor sit amet. <hr /> Lorem ipsum dolor sit amet. <hr />Lorem ipsum dolor sit amet.<hr />Lorem ipsum dolor sit amet.</span></div> </h3>
                        <div>
                            <Link to='/viewhotelrooms'>
                                <button className='btn btn-primary' style={{ width: "230px", backgroundColor: "black" }}>Read More</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <br />

            </div>

            <div style={{ marginTop: "30px" }}>  <Footer />
            </div>

        </div>
    );
}