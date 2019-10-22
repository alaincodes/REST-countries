import React from 'react';
import './CountryForm.scss';

export default function CountryForm({
  countryName,
  handleCountryNameChange,
  countryRegion,
  handleCountryRegionChange,
}) {
  return (
    <section className='filter-container'>
      <input
        placeholder='Search for a country..'
        type='search'
        value={countryName}
        onChange={handleCountryNameChange}
      />
      <select
        placeholder='Filter by Region'
        className='filter-region'
        id='regions'
        onChange={handleCountryRegionChange}
        value={countryRegion}
      >
        <option value='' defaultValue>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </section>
  );
}
