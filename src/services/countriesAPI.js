import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2/all';
const countryNumericCodeURL = 'https://restcountries.eu/rest/v2/alpha';

const getAllCountries = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const getUniqueCountry = (numericCode) => {
  const request = axios.get(`${countryNumericCodeURL}/${numericCode}`);
  return request.then((response) => response.data);
};

export default { getAllCountries, getUniqueCountry };
