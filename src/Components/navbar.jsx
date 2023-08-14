import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{ backgroundColor: "black" }}>
      <MDBContainer fluid >
        <MDBIcon className='icon' fas icon="hotel" />
        <MDBNavbarBrand href='/' style={{ marginLeft: '20px', color: "white", marginRight: "20px" }}>Luxuary Hotel</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon style={{ color: "white" }} icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
              <MDBNavbarLink href='/admin' style={{ color: "white" }}>Admin</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink active aria-current='page' href='/hotelservices' style={{ color: "white" }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/viewhotelrooms' style={{ color: "white" }}>Rooms</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact' style={{ color: "white" }}>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
            <Link to="/register">
              <MDBBtn color='primary' style={{ marginRight: '10px', backgroundColor: 'black' }}>Rigister</MDBBtn>
            </Link>
            <Link to="/login">
              <MDBBtn color='primary' style={{ backgroundColor: 'black' }} >Login</MDBBtn>
            </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}