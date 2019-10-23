import React, { useState, useEffect } from 'react';
import './CountryDetails.scss';

export default function CountryDetails({ match }) {
  useEffect(() => {
    const fetchCountry = async () => {
      const fetchCountry = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${match.params.id}`,
      );
      const country = await fetchCountry.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountry();
  }, [match.params.id]);

  const [country, setCountry] = useState({});

  return (
    <>
      <div className='country-details-container'>
        <button className='country-details-btn'>Back</button>
        <img className='country-flag' src={country.flag} alt='country flag' />
        <article className='country-details'>
          <div>
            <h1>{country.name}</h1>
            <p>Native Name: {country.nativeName}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
          </div>
          <div>
            <p>Top Level Domain: {/* {country.topLevelDomain} */}</p>
            <p>Currencies: {/* {country.currencies} */}</p>
            <p>Languages:{/* {country.languages} */}</p>
          </div>
        </article>
        <div>
          <p>Borders: </p>
        </div>
      </div>
    </>
  );
}
