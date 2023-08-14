import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Register from './Components/register';
import ViewUsers from './Components/viewusers';
import Home from './Components/home';
import Login from './Components/login';
import Admin from './Components/admin';
import Rooms from './Components/rooms';
import Employee from './Components/employee';
import ViewEmployees from './Components/viewemployees';
import HotelRoooms from './Components/hotelrooms';
import ViewHotelRooms from './Components/viewhotelrooms';
import Bookingscreen from './Components/bookingscreen';
import Contact from './Components/contact';
import HotelServices from './Components/hotelservices';
import ViewBookings from './Components/viewbookings';
import DeleteEmployee from './Components/deleteemployee';
// import Getlogin from './Components/getlogin';
import React, { useEffect, useState } from 'react';
// import Profilescreen from './Components/profilescreen';
// import Book from './Components/book';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsLoggedIn(true);
    }
    console.log(userData)

  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/viewusers" component={ViewUsers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/viewemployees" component={ViewEmployees} />
        <Route exact path="/hotelrooms" component={HotelRoooms} />
        <Route exact path="/viewhotelrooms" component={ViewHotelRooms} />
        <Route exact path="/bookingscreen" component={Bookingscreen} />
        <Route exact path="/bookingscreen/:id" component={Bookingscreen} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/hotelservices" component={HotelServices} />
        <Route exact path="/viewbookings" component={ViewBookings} />
         <Route exact path="/deleteemployee" component={DeleteEmployee} /> 
         {/* <Route exact path="/profilescreen" component={Profilescreen} /> */}
        {/* <Route exact path="/getlogin" component={Getlogin} /> */}
        {/* <Route exact path="/book" component={Book} /> */}
      </Switch>
    </div>

  );
}

export default App;
