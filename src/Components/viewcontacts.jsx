import React, { useState, useEffect } from 'react';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function ViewContact() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            // https://shiny-complex-barge.glitch.me/getusers
            const response = await fetch("https://nasal-shining-eris.glitch.me/getcontactdata");
            const data = await response.json();
            setData(data);
            // console.log(data);
        }
        getData();
    }, []);


    return (
        <MDBRow className='row-cols-1 row-cols-md-4 g-4 bs ' style={{ margin: "30px" }}>
            {data.map((item, index) => (
                <MDBCol>
                    <MDBCard className="h-100" style={{ width: "300px", height: "400px" }}>
                        {/* <MDBCardImage
                            // https://shiny-complex-barge.glitch.me/images/${item.profileImg}
                            src={`http://localhost:4000/images/${item.profileImg}`}
                            alt='...'
                            position='top'
                            style={{ width: "300px", height: "200px" }}
                        /> */}
                        <MDBCardBody>
                            <MDBCardTitle style={{justifyContent:"left"}}>Name:{item.name}</MDBCardTitle>
                            <MDBCardText  >
                                <b> <p>Email:{item.email}</p>
                                    {/* <p>CNIC:{item.cnic}</p>
                                    <p>Contact Number:{item.phonenumber}</p>
                                    <p>Salary:{item.salary}</p> */}
                                    </b>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}


        </MDBRow>
    );
}