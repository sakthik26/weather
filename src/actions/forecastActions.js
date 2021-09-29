import {
  FORECAST_ERROR,
  GET_SHOW_FIVE_DAY_FORECAST_FLAG,
  GET_USER_CLICKED_WEATHER_FORECAST_OBJECT,
  GET_WEATHER_FORECAST,
  GET_WEATHER_FORECAST_LOCATION,
  SET_LOADING,
  GET_SHOW_TEMP_IN_C,
} from './types';

// Helper Functions
import { getAPICallValueForOpenWeatherMapDotOrg } from '../helpers/helperFunctions';

import { setAlertAction } from './alertActions';

export const getShowFiveDayForecastFlagAction = (showFiveDayForecastFlag) => {
  return {
    type: GET_SHOW_FIVE_DAY_FORECAST_FLAG,
    // Data type is: bool
    payload: showFiveDayForecastFlag,
  }
}

export const getUserClickedWeatherForecastObjectAction = (userClickedWeatherForecastObject) => {
  return {
    type: GET_USER_CLICKED_WEATHER_FORECAST_OBJECT,
    payload: userClickedWeatherForecastObject,
  }
};

export const getShowTemperatureInCelciusFlagAction = (showTempInCelcius) => {
  return {
    type: GET_SHOW_TEMP_IN_C,
    payload: showTempInCelcius,
  }
};


// Get the weather forecast data for a given location
export const getWeatherForecastAction = (searchText) => async (dispatch) => {
  try {
    setLoadingAction();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1000);


    let apiCallValue = getAPICallValueForOpenWeatherMapDotOrg(searchText);

    // Make the fetch Get request
    const res = await fetch(apiCallValue);
 
    // Format the res into the data
    const data = await res.json();

    const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    const tempInCelcius = (temp) => (temp-32) * 5/9;

    // Handle the error if api did not find the city the user searched for.
    if (data.message === 'city not found') {

      dispatch(
        setAlertAction(`Unable to find location: "${searchText}". Please try again.`, 'error')
      );
    } else {
      let tempArray = []
      // Get the location of the weather. (i.e. The city and country name)
      dispatch({
        type: GET_WEATHER_FORECAST_LOCATION,
        payload: `${data.city.name}, ${data.city.country}`,
      });

      let fiveDayWeatherForecastTemporaryArray = [];

      data.list.forEach((weatherObject, index) => {
        tempArray.push(weatherObject.main.temp)
        if ((index + 1) % 8 === 0) {
          weatherObject.main.temp = average(tempArray)
          weatherObject.dt = new Date(weatherObject.dt_txt);
          weatherObject.main.tempincelcius = tempInCelcius(weatherObject.main.temp)
          fiveDayWeatherForecastTemporaryArray.push(weatherObject);
          tempArray = []
        }
      });

      dispatch(
        setAlertAction('Weather information loaded', 'success')
      );
    
      dispatch({
        type: GET_WEATHER_FORECAST,
        payload: fiveDayWeatherForecastTemporaryArray,
      });
    }
  } catch (error) {

    dispatch(setAlertAction('Something went wrong. Please try again later.', 'error'));
  }
};

// Set loading to 'true'
export const setLoadingAction = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
};