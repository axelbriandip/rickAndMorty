import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ resident }) => {
    const [ residentItem, setResidentItem ] = useState({});
    useEffect(() => {
        axios.get(resident)
            .then(res => setResidentItem(res.data));
    }, [])
    console.log(residentItem);
    return (
        <div>
            <span><b>name: </b>{residentItem?.name}</span>
            <img src={residentItem.image}/>
            <span><b>status: </b>{residentItem.status}</span>
            <span><b>origin.name: </b>{residentItem.origin?.name}</span>
            <span><b>episode.length: </b>{residentItem.episode?.length}</span>
        </div>
    );
};

export default ResidentInfo;