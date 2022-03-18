

import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {area, population,name,flags} = props.country;
    return (
        <div className='music bg-info' >
            <h3>Country name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area:{area}</p>
        </div>
    );
};

export default Country;