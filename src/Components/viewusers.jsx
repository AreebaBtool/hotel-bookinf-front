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

export default function ViewUsers() {
    const [data,setData]=useState([]);
  
    useEffect(() => {
        async function getData() {   
            // https://shiny-complex-barge.glitch.me/getusers
            const response = await fetch(`https://nasal-shining-eris.glitch.me/getdata`);
             const data = await response.json();
            setData(data);
            // console.log(data);
        }
        getData();
    }, []);


    return (
        <MDBRow className='row-cols-1 row-cols-md-4 g-4 bs' style={{margin:"30px"}}>
            {data.map((item,index)=>(
                <MDBCol>
                <MDBCard className="h-100" style={{width:"300px",height:"400px"}}>
                    {/* <MDBCardImage
                    // https://shiny-complex-barge.glitch.me/images/${item.profileImg}
                        src={`http://localhost:4000/images/${item.profileImg}`}
                        alt='...'
                        position='top'
                        style={{width:"300px",height:"200px"}}
                    /> */}
                    <MDBCardBody>
                        <MDBCardTitle>{item.name}</MDBCardTitle>
                        <MDBCardText>
                            <p>{item.email}</p>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            ))}
            

        </MDBRow>
    );
}