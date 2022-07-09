import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const LocationInfo = () => {
    const [ location, setLocation ] = useState({});
    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data));
    }, [])
    console.log(location);
    return (
        <div>
            <span><b>name: </b>{location.name}</span>
            <span><b>type: </b>{location.type}</span>
            <span><b>dimension: </b>{location.dimension}</span>
            <span><b>residents: </b>{location.residents?.length}</span>
        </div>
    );
};

export default LocationInfo;