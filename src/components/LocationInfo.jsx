import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

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
    console.log(location);
    return (
        <div className='container'>
            <h1 className='title'>Rick and Morty Wiki</h1>
            {/* SEARCH LOCATION */}
            <input className='input-search' type="text" value={searchID} onChange={e => setSearchID(e.target.value)} placeholder="Type a location ID"/>
            <button className='btn-search' onClick={() => fn_searchID(searchID)}>Search</button>
            {/* RANDOM LOCATION */}
            <span><b>name: </b>{location.name}</span>
            <span><b>type: </b>{location.type}</span>
            <span><b>dimension: </b>{location.dimension}</span>
            <span><b>residents: </b>{location.residents?.length}</span>
            <hr/>
            {/* RESIDENT INFO */}
            {
                location.residents?.map(resident => (
                    <ResidentInfo key={resident} resident={resident}/>
                ))
            }
        </div>
    );
};

export default LocationInfo;