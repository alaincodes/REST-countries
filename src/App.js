import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import CountryForm from './components/CountryForm';
import CountryCard from './components/CountryCard';

import './App.scss';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [countryRegion, setCountryRegion] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      // console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const filterCountryByName = countries.filter((country) => {
    return country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
  });

  // Filter Regions with FilterCountryByName is the only solution I found to
  // filter by Regions..
  // I might use conditional rendering because it's a little bit tricky
  // to understand but it works for now..
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
    <div>
      <Navbar />
      <CountryForm
        countryName={countryName}
        countryRegion={countryRegion}
        handleCountryNameChange={handleCountryNameChange}
        handleCountryRegionChange={handleCountryRegionChange}
      />
      <CountryCard filterCountryByRegion={filterCountryByRegion} />
    </div>
  );
}

