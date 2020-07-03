import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import logo from './assets/image.png';

import styles from './App.module.css';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const callFunction = async () => {
    const fetchedData = await fetchData();

    setData(fetchedData);
  }

  useEffect(() => {
    callFunction();
  }, []);

  const handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={logo} alt="covid-19-logo" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;