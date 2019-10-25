import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryForm from './CountryForm';
import countriesAPI from '../services/countriesAPI';

import './CountryCard.scss';

export default function CountryCard() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [countryRegion, setCountryRegion] = useState('');

  useEffect(() => {
    countriesAPI
      .getAllCountries()
      .then((countries) => {
        // console.log(response.data);
        setCountries(countries);
      })
      .catch((err) => err.message);
  }, []);

  const filterCountryByName = countries.filter((country) => {
    return country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
  });

  const filterCountryByRegion = filterCountryByName.filter((country) => {
    return (
      country.region.toLowerCase().indexOf(countryRegion.toLowerCase()) !== -1
    );
  });

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleCountryRegionChange = (event) => {
    setCountryRegion(event.target.value);
  };
  return (
    <>
      <CountryForm
        countryName={countryName}
        countryRegion={countryRegion}
        handleCountryNameChange={handleCountryNameChange}
        handleCountryRegionChange={handleCountryRegionChange}
      />
      <section className='countries-container'>
        {filterCountryByRegion.map((country) => (
          <div className='country-card' key={country.numericCode}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                className='country-card-flag'
                src={country.flag}
                alt='country flag'
              />
              <h2 className='country-card-title'>{country.name}</h2>
              <aside className='country-card-description'>
                <p>
                  Population:{' '}
                  {country.population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                </p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </aside>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
