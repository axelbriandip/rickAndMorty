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
        <div className='card-resident'>
            <div className="container-img">
                <img className='img-resident' src={residentItem.image}/>
            </div>
            <div className="container-info">
                <span className='name-resident'><b>{residentItem?.name}</b></span>
                <span className='status-resident'>{residentItem.status} - {residentItem.species}</span>
                <span className='span-extra'>origin</span>
                <span className='origin-name-resident'>{residentItem.origin?.name}</span>
                <span className='span-extra'>episodes where appear</span>
                <span className='episode-length-resident'>{residentItem.episode?.length}</span>
            </div>
        </div>
    );
};

export default ResidentInfo;