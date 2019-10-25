import React, { useState, useEffect } from 'react';
import './CountryDetails.scss';
import { Link } from 'react-router-dom';
import countriesAPI from '../services/countriesAPI';

const formatArrayItem = (item = []) => {
  if (item.length < 1) {
    return '';
  }
  const formattedItem = item.map(({ name }) => name);
  return formattedItem.join(', ');
};

export default function CountryDetails({ match }) {
  useEffect(() => {
    countriesAPI
      .getUniqueCountry(match.params.id)
      .then((country) => {
        setCountry(country);
      })
      .catch((err) => err.message);
  }, [match.params.id]);

  const [country, setCountry] = useState({});

  return (
    <>
      <div className='country-details-container'>
        <div className='country-btn-img'>
          <Link to='/'>
            <button className='country-details-btn'>Back</button>
          </Link>
          <img className='country-flag' src={country.flag} alt='country flag' />
        </div>
        <article className='country-details'>
          <h1>{country.name}</h1>
          <div className='country-details-list'>
            <ul>
              <li>
                <b>Native Name:</b> {country.nativeName}
              </li>
              <li>
                <b>Population:</b> {country.population}
              </li>
              <li>
                <b>Region:</b> {country.region}
              </li>
              <li>
                <b>Sub Region:</b> {country.subregion}
              </li>
              <li>
                <b>Capital:</b> {country.capital}
              </li>
            </ul>
            <ul>
              <li>
                <b>Top Level Domain:</b> {country.topLevelDomain}
              </li>
              <li>
                <b>Currencies:</b> {formatArrayItem(country.currencies)}
              </li>
              <li>
                <b>Languages:</b> {formatArrayItem(country.languages)}
              </li>
            </ul>
          </div>
          <p className='country-details-borders'>
            <b>Borders:</b> {country.borders}
          </p>
        </article>
      </div>
    </>
  );
}
