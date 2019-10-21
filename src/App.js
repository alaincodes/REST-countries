import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import moonIcon from './images/moon.svg';

import './App.scss';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const filterCountryByName = countries.filter((country) => {
    return country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
  });

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <nav className='navbar-container'>
        <h1 className='navbar-title'>Where in the world ?</h1>
        <button className='navbar-btn'>Dark Mode</button>
      </nav>
      <section className='filter-container'>
        <input
          placeholder='Search for a country..'
          type='search'
          value={countryName}
          onChange={handleCountryNameChange}
        />
        <input
          placeholder='Filter by Region'
          className='filter-region'
          list='regions'
        />
        <datalist id='regions'>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </datalist>
      </section>
      <section className='countries-container'>
        {filterCountryByName.map((country) => (
          <div className='country-card' key={country.numericCode}>
            <img className='country-card-flag' src={country.flag} alt='' />
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
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
