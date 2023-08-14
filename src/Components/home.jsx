import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

export default function Home() {
    return (
        <div className='bg-image'>
            {/* <Navbar /> */}
            <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-20-scaled.jpg' className='img-fluid' alt='Sample' style={{ height: "800px" }} />
            {/* <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-20-scaled.jpg' className='img-fluid' alt='Sample' /> */}
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-50'>
                    {/* <p className='text-white mb-0'>Get Started</p> */}
                    <Link to="/register">
                        <center>
                    <button style={{backgroundColor:"burlywood",boxShadow:"none",width:'200px',height:'50px',borderBlockColor:"none"}} className='btn btn-primary' >Get Started</button>
                    </center>    </Link>
                </div>
            </div> <br /><br />
            <Footer/>
        </div>
    );
}