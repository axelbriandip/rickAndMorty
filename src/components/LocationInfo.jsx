import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchLocation from './SearchLocation';

const LocationInfo = () => {
    // RANDOM LOCATION
    const [ location, setLocation ] = useState({});
    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data));
    }, [])

    // SEARCH LOCATION
    const [ searchID, setSearchID ] = useState('');
    const fn_searchID = (id) => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data));
    }
    return (
        <div>
            {/* RANDOM LOCATION */}
            <span><b>name: </b>{location.name}</span>
            <span><b>type: </b>{location.type}</span>
            <span><b>dimension: </b>{location.dimension}</span>
            <span><b>residents: </b>{location.residents?.length}</span>
            <hr/>
            {/* SEARCH LOCATION */}
            <input type="text" value={searchID} onChange={e => setSearchID(e.target.value)}/>
            <button onClick={() => fn_searchID(searchID)}>Search</button>
            <span>{location.name} - {location.id}</span>
            <hr/>
        </div>
    );
};

export default LocationInfo;