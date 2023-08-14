import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ViewBookings() {
    const [data, setData] = useState([]);
    // const{id}=useParams();

    useEffect(() => {
        async function getData() {
            // https://shiny-complex-barge.glitch.me/getusers
            const response = await fetch(`https://nasal-shining-eris.glitch.me/getbookingdata`);
            const data = await response.json();
            setData(data);
            // console.log(data);
        }
        getData();
    }, []);


    return (
        <MDBRow className='row-cols-1 row-cols-md-4 g-8 bs ' style={{ margin: "30px" }}>
            <div className='col-md-4' style={{ marginTop: "20px" }}>
                <Link to='/rooms'>
                    <button type="button" class="btn  btn-rounded" style={{ backgroundColor: "red", }}> <i class="far fa-circle-left" style={{ fontSize: "20px", color: "white" }}>BACK </i></button>
                </Link>
            </div>
            {data.map((item, index) => (
                <MDBCol>
                    <MDBCard className="h-100" style={{ width: "300px", height: "400px" }}>
                        <MDBCardBody>
                            {/* <MDBCardTitle style={{ justifyContent: "left" }}>Room Name:{item.data}</MDBCardTitle> */}
                            <MDBCardText  >

                                <b>
                                    {/* <p>Room Id:{item.roomid}</p> */}
                                    {/* <p>Transaction Id:{item.transactionId}</p> */}
                                    <p style={{ color: "red" }}>Room Name:{item.data}</p>
                                    <p style={{ color: "green" }}>Customer Name:{item.username}</p>
                                    <p style={{ color: "blue",textDecoration:"underline"}}>Email:{item.email}</p>
                                    <p style={{ color: "green" }}>Contact Number:{item.phonenumber}</p>
                                    <p style={{ color: "green" }}>Arrival Date:{item.fromdate}</p>
                                    <p style={{ color: "green" }}>Departure Date :{item.todate}</p>
                                    <p style={{ color: "green" }}>Total Amount:{item.totalamount}</p>
                                    <p style={{ color: "green" }}>Total Days:{item.totaldays}</p>
                                    <p style={{ color: "green" }}>Max Count:{item.maxcount}</p>
                                    <p style={{ color: "red" }}>Status:{item.status}</p>
                                </b>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}


        </MDBRow>
    );
}