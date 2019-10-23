import React from 'react';
import { Link } from 'react-router-dom';

import './CountryCard.scss';

export default function CountryCard({ filterCountryByRegion }) {
  return (
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
  );
}
