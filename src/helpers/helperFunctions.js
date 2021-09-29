import React from 'react';

let OpenWeatherMapDotOrgApiKey;

if (process.env.NODE_ENV === 'production') {
  OpenWeatherMapDotOrgApiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_PRODUCTION;
} else {
  OpenWeatherMapDotOrgApiKey =
    process.env.REACT_APP_OPEN_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_DEVELOPMENT;
}

export const getAPICallValueForOpenWeatherMapDotOrg = (searchText) => {
  const apiKey = OpenWeatherMapDotOrgApiKey;

  let weatherAPICallUsingZipCode =
    `https://api.openweathermap.org/data/2.5/forecast?zip=` +
    searchText +
    ',de&units=imperial&appid=' +
    apiKey;

  let weatherAPICallUsingCity =
    `https://api.openweathermap.org/data/2.5/forecast?q=` +
    searchText +
    ',de&units=imperial&appid=' +
    apiKey;

  let isSearchTextANumber = !isNaN(searchText);

  if (isSearchTextANumber) {
    return weatherAPICallUsingZipCode;
  } else {
    return weatherAPICallUsingCity;
  }
};

export const getWeatherImage = (weatherTypeString) => {
  
    let url = "http://openweathermap.org/img/w/"+ weatherTypeString + ".png" 
      return (<img src= {url} />);

};
