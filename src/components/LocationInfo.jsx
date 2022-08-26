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

    // SEARCH LOCATION ID
    const [ searchID, setSearchID ] = useState('');
    const fn_searchID = (id) => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data));
        setSearchID('');
    }
    // console.log(location);

    // SEARCH LOCATION NAME
    const [ searchLocation, setSearchLocation ] = useState('');
    const [ results, setResults ] = useState([]);
    useEffect(() => {
        if(searchLocation !== "") {
            axios.get(`https://rickandmortyapi.com/api/location/?name=${searchLocation}`)
                .then(res => setResults(res.data.results));
        } else {
            setResults([]);
        }
    }, [ searchLocation ])
    return (
        <div className='container'>
            <h1 className='title'>Rick and Morty Wiki</h1>
            {/* SEARCH LOCATION */}
            <input className='input-search' type="text" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} placeholder="Type a location ID"/>
            {
                results.map(result => (
                    <div key={result.id} onClick={() => fn_searchID(result.id)}>
                        {result.name}
                    </div>
                ))
            }
            {/* RANDOM LOCATION */}
            <h3 className='name'>{location.name}</h3>
            <div className="container-span">
                <span className='type'><b>type: </b>{location.type}</span>
                <span className='dimension'><b>dimension: </b>{location.dimension}</span>
                <span className='residents'><b>residents: </b>{location.residents?.length}</span>
            </div>
            {/* RESIDENT INFO */}
            <h3 className='title-residents'>Residents</h3>
            <div className="container-residents row">
                {
                    location.residents?.map(resident => (
                        <ResidentInfo key={resident} resident={resident}/>
                    ))
                }
            </div>
        </div>
    );
};

export default LocationInfo;