import React, { useEffect, useState } from 'react';
import axios from "axios";


function Homescreen() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    useEffect(async () => {
        try {
            setLoading(true);
            const data = (await axios.get('/api/rooms/getallrooms')).data
            setRooms(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error);
            setLoading(false);
        }
    }, [])
    return (
        <div>
           {loading ?(<h1>Loading..</h1>):error ? (<h1>Error</h1>):(rooms.map(room=>{
            return <h1>{room.name}</h1>
           }))}
        </div>
    )
}

export default Homescreen
