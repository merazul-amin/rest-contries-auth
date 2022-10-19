import React, { useContext } from 'react';
import { CountriesContext } from '../Layout/Layout';
import SingleCountry from '../SingleCountry/SingleCountry';

const Countries = () => {
    // const countries = useContext(CountriesContext);
    // console.log(countries[0]);
    return (
        <div>
            <h1>Countries </h1>

            {/* <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                {
                    countries.map((country, index) =>
                        <SingleCountry
                            country={country}
                            key={index}
                        ></SingleCountry>)
                }
            </div> */}
        </div>
    );
};

export default Countries;