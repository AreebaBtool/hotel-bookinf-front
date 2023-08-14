import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
import { useState } from 'react';
export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(`https://nasal-shining-eris.glitch.me/loginuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:email, password:password }),
      });
      // const data = await result.json()
      // console.log(data);
      if (result.ok) {
        const data = await result.json();
        setLoginMessage(data.message);
        Swal.fire('Successful', 'Login Successful', 'success').then(result=>{
          window.location.href='/viewhotelrooms';
      })
      } else {
        // console.error('Login failed');
        Swal.fire('Failed', 'Invalid Credentials or Please Register First', 'error')
      }
     
    }

    catch (error) {
      console.error(error);
      setLoginMessage('Error occur');
    }
    const userData = {
      username, email, phonenumber
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (

    < MDBContainer fluid className='' >
      <center>
        <MDBCard className='text-black' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "450px" }} >

          <MDBCardBody >
            <MDBRow className=' row bs'>
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              {/* <div className=' row bs'> */}
              <form className='my-form-container'  >
                <MDBCol >
                  <MDBRow> <MDBCardTitle className='title' style={{ color: "#ad076e" }}>Login</MDBCardTitle></MDBRow>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="user-alt" />
                    <  MDBInput label='Name' id='typeText' type='text' name='name' value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon far icon="envelope" />
                    <MDBInput label='Email ' id='typeEmail' type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="user-lock" />
                    <MDBInput label='Password' id='typePassword' type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                  </div>
                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon="phone" />
                    <MDBInput label='Phone no.' id='typeNumber' type='number' name='phonenumber' value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} required />
                  </div>
                  {/* <div  style={{ margin: "10px" }}className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon="file" />
                    <MDBFile  id='customFile' type='file' name='profileImg'  />
                  </div> */}
                  {/* <div  style={{ margin: "10px" }}>
                    <MDBFile  id='customFile' type='file' name='profileImg2' />
                  </div> */}
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <MDBBtn style={{ backgroundColor: "#ad076e", width: '200px' }} onClick={handleLogin} >Login</MDBBtn>
                      <p>{loginMessage}</p>
                    </MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol>
                      <Link to="/register">
                        <MDBBtn className='logbtn1' style={{ backgroundColor: "#ad076e", width: '200px' }}>Not Registered?</MDBBtn>
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

 // Swal.fire({
        //   icon: 'success',
        //   title: 'Login Successful',
        //   text: 'Click Ok to continue...',
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     window.location.href = '/hotelservices';
        //   }
        // })
 // Swal.fire({
        //   icon: 'error',
        //   title: 'Invalid credentials',
        //   text: 'Please Register first and fill the fields correctly',
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     window.location.href = '/hotelservices';
        //   }
        // })

