import React, { useState, useEffect } from 'react';
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
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
export default function ViewHotelRooms() {
    const [data, setData] = useState([]);
    const [fromdate, setFromdate] = useState();
    const [todate, settodate] = useState();
    const [duplicaterooms, setduplicaterooms] = useState([]);
    const [searchkey, setsearchkey] = useState('');
    const [type, settype] = useState('all');
    const firstdate = moment(fromdate, 'DD-MM-YYYY')
    const lastdate = moment(todate, 'DD-MM-YYYY')
    useEffect(() => {
        async function getData() {
            // https://shiny-complex-barge.glitch.me/getusers
            const response = await fetch("https://nasal-shining-eris.glitch.me/gethotelroomsdata");
            const data = await response.json();
            setduplicaterooms(data);
            setData(data);
            // console.log(data);
        }
        getData();
    }, []);
    function filterByDate(dates) {
        // console.log(dates[0].format('DD-MM-YYYY'));
        // console.log(dates[1].format('DD-MM-YYYY'));
        setFromdate(dates[0].format('DD-MM-YYYY'));
        settodate(dates[1].format('DD-MM-YYYY'));


        var temprooms = []
        var availability = false
        for (const item of duplicaterooms) {
            if (item.currentbookings.length > 0) {
                for (const booking of item.currentbookings) {
                    if (!moment(dates[0].format('DD-MM-YYYY')).isBetween
                        (booking.fromdate, booking.todate)
                        && !moment(dates[1].format('DD-MM-YYYY')).isBetween
                            (booking.fromdate, booking.todate)
                    ) {

                        if (
                            (dates[0].format('DD-MM-YYYY')) !== booking.fromdate &&
                            (dates[0].format('DD-MM-YYYY')) !== booking.todate &&
                            (dates[1].format('DD-MM-YYYY')) !== booking.fromdate &&
                            (dates[1].format('DD-MM-YYYY')) !== booking.todate) {
                            availability = true
                        }
                    }
                }
            }
            if (availability = true || item.currentbookings.length == 0) {
                temprooms.push(item);
            }
            setData(temprooms)
        }

    }
    function filterBySearch() {
        const temprooms = duplicaterooms.filter(item => item.name.toLowerCase().includes(searchkey.toLowerCase()))
        setData(temprooms);

    }
    function filterByType(e) {
        settype(e);
        if (e !== 'all') {
            const temprooms = duplicaterooms.filter(item => item.type.toLowerCase() == e.toLowerCase())
            setData(temprooms);
        }
        else {
            setData(duplicaterooms)
        }
    }

    return (
        <div className='container'>
                
            <div className='row mt-5 bs'  >
            <div className='col-md-4' style={{marginTop:"20px"}}>
                <Link to='/rooms'>
                    <button type="button" class="btn  btn-rounded" style={{ backgroundColor: "red", }}> <i class="far fa-circle-left" style={{ fontSize: "20px", color: "white" }}>BACK </i></button>
                </Link>
                </div>
                {/* <div className='col-md-3'>
                    <RangePicker format={'DD-MM-YYYY'} onChange={filterByDate} style={{ borderColor: "black",marginTop:"20px",marginLeft:"1px"}} />
                </div> */}
                <div className='col-md-4'>

                    <input type='text' className='form-control' placeholder='search rooms'
                        value={searchkey} onChange={(e) => (setsearchkey(e.target.value))} onKeyUp={filterBySearch}
                        style={{ borderColor: "black", marginTop: "20px", marginLeft: "10px" }} />
                </div>
                <select style={{ width: "300px", marginTop: "20px", borderColor: "black", height: "35px", marginLeft: "20px" ,marginBottom:"10px"}} value={type} onChange={(e) => (filterByType(e.target.value))} >
                    <option value="all">All</option>
                    <option value="delux">Delux</option>
                    <option value="non-delux">Non-Delux</option>
                </select>
               
                
            </div>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4' style={{ margin: "30px" }}>

                {data.map((item, index) => (
                    <div className='col bs justify-content-center mt-5 col-md-5 mt-3'>
                        <MDBCol>
                            <MDBCard className="h-50 w-100 col-md-10" style={{ width: "300px", height: "400px", display: "flex" }}>
                                <MDBCardImage className='smalling'
                                    // https://shiny-complex-barge.glitch.me/images/${item.profileImg}
                                    src={`https://nasal-shining-eris.glitch.me/images/${item.profileImg}`}
                                    alt='...'
                                    position='top'
                                    style={{ width: "300px", height: "200px" }}
                                />

                                <MDBCardBody style={{ alignItems: "start" }}>
                                    <div className='col-md-11' style={{ textAlign: "left", fontFamily: "sans-serif" }}>
                                        <MDBCardTitle style={{ fontSize: '20px' }}>{item.name}</MDBCardTitle>
                                        <MDBCardText style={{ fontSize: '15px' }}>
                                            {/* <p>{item.description}</p> */}
                                            <b><p> Max Count:{item.maxcount}</p></b>
                                            <b><p> Phone No:{item.phonenumber}</p></b>
                                            <b><p> Type:{item.type}</p></b>

                                        </MDBCardText>
                                        {/* <Link>
                                            <button className='btn btn-primary ' style={{ backgroundColor: "black", boxShadow: "none", float: "right" }}  >Book Now</button>
                                        </Link> */}
                                        <Link to={`/bookingscreen/${item._id}`}>
                                            <div style={{ float: "right" }}>
                                                <button className='btn btn-primary' style={{ backgroundColor: "black", boxShadow: "none" }} >View Details & Book Now</button>
                                            </div>
                                        </Link>
                                    </div>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                ))}
            </MDBRow>
        </div>
    );
}