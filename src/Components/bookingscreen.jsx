import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
const { RangePicker } = DatePicker;
export default function Bookingscreen() {
    const [data, setData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState()
    const { id } = useParams();
    const [fromdate, setFromdate] = useState();
    const [todate, settodate] = useState();
    // const [totalamount, settotalamount] = useState();
    const firstdate = moment(fromdate, 'DD-MM-YYYY')
    const lastdate = moment(todate, 'DD-MM-YYYY')
    const totaldays = moment.duration(lastdate.diff(firstdate)).asDays() + 1
    const totalamount = totaldays * data.rentperday

// Fetching Data

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        async function getData() {
            setLoading(true);
            // https://shiny-complex-barge.glitch.me/getusers
            const response = await fetch(`https://nasal-shining-eris.glitch.me/gethotelroomsdata/${id}`);
            const data = await response.json();
            // settotalamount(data.rentperday * totaldays);
            setData(data);
            setLoading(false);
            // console.log(data);
        }
        getData();
    }, [id]);

    // Filter by Dates

    function filterByDate(dates) {
    
        setFromdate(dates[0].format('DD-MM-YYYY'));
        settodate(dates[1].format('DD-MM-YYYY'));

    }
   
    // Room Booking Data send to Backend along Stripe payment

    async function onToken(token) {
        // console.log(token);
        const bookingdetails = {
            data: data.profileImg,
            data: data.name,
            roomid: data._id,
            userid: '64d14cb98ed550beaa10ca96',
            // userid: JSON.parse(localStorage.getItem('userData'))._id,
            username: JSON.parse(localStorage.getItem('userData')).username,
            email: JSON.parse(localStorage.getItem('userData')).email,
            phonenumber: JSON.parse(localStorage.getItem('userData')).phonenumber,
            fromdate: fromdate,
            todate: todate,
            totalamount: totalamount,
            totaldays: totaldays,
            maxcount: data.maxcount,
            transactionId: '1234',
            token: token
        }

        console.log(bookingdetails);

        try {
            console.log("Booked successfully:")
            const result = await fetch(`https://nasal-shining-eris.glitch.me/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingdetails)
            })
            Swal.fire('Congratulations', 'Your Room booked Successfully', 'success').then(result=>{
                window.location.href='/viewhotelrooms';
            })
        } catch (error) {
            console.log(error);
            Swal.fire('Oops', 'Something went wrong', 'error')
        }
    }
            // Main body

    return (

        <div className='container m-5'>
            <div className='row bs mt-4'>
            <div className='col-md-4' style={{marginTop:"20px"}}>
                <Link to='/viewhotelrooms'>
                    <button type="button" class="btn  btn-rounded" style={{ backgroundColor: "red", }}> <i class="far fa-circle-left" style={{ fontSize: "20px", color: "white" }}>BACK </i></button>
                </Link>
                </div>
                <div className='col-md-7' style={{marginTop:"20px"}}>
                    <RangePicker format={'DD-MM-YYYY'} onChange={filterByDate} style={{ borderColor: "black" }} />
                </div>
            </div>
            <div className='row bs justify-content-center mt-4'>
                <div className='col-md-5'>
                    <h3 style={{ fontFamily: "sans-serif", textAlign: "left" }}> {data.name}</h3>
                    <img src={`https://nasal-shining-eris.glitch.me/images/${data.profileImg}`} className='bigimg' style={{ height: "200px", width: "400px" }} />
                    {/* <h2>{data.description}</h2> */}
                </div>
                <div className='col-md-6'>
                    <div style={{ textAlign: "right" }}  >
                        {/* style={{float:"right"}} */}
                        <h3 >Booking Details</h3>
                        <hr />
                        <b> <p>Name:{JSON.parse(localStorage.getItem('userData')).username}</p>
                            <p>From Date:{fromdate}</p>
                            <p>To Date:{todate}</p>
                            <p>Max Count:{data.maxcount}</p></b>
                    </div>
                    <div style={{ textAlign: "right" }}  >
                        {/* style={{paddingRight:"40px",float:"right"}} */}
                        <h3>Amount</h3>
                        <hr />
                        <b>
                            <p>Total days:{totaldays}</p>
                            <p>Rent per day:{data.rentperday}</p>
                            <p>Total Amount:{totalamount}</p>
                        </b>
                    </div>
                    <div style={{ float: "right" }}>
                        {/* <button className='btn btn-primary' style={{ backgroundColor: "black" }} onClick={bookRoom}>Pay Now</button> */}
                        <StripeCheckout
                            amount={totalamount * 100}
                            currency='PKR'
                            token={onToken}
                            stripeKey="pk_test_51Naw4zGClg2jznXplZpG2gijzzGq3KlxspyUyZlmvd25ujRSWgGm3fu6ccSQn9lnK9cOiDxOfG7PncnqbTpITF9i003yNaL3To"
                        >
                            <button className='btn btn-primary' style={{ backgroundColor: "black" }} >Pay Now</button>

                        </StripeCheckout>

                    </div>
                </div>
            </div>
        </div>

    );
}
