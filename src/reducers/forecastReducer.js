import {
  FORECAST_ERROR,
  GET_SHOW_FIVE_DAY_FORECAST_FLAG,
  GET_USER_CLICKED_WEATHER_FORECAST_OBJECT,
  GET_WEATHER_FORECAST,
  GET_WEATHER_FORECAST_LOCATION,
  SET_LOADING,
  GET_SHOW_TEMP_IN_C,
} from '../actions/types';

// Create the initial state of the forecastReducer
const initialState = {
  loading: true,
  error: null,
  // NOTE: Default value is 'true' because the five-day forecast should show by default
  showFiveDayForecastFlag: true,

  showTempInCelcius:false,
  // Data type is: []
  fiveDayWeatherForecastArray: null,
  // Data type is: {}
  weatherForecastLocation: null,
  // Data type is: {}
  userClickedWeatherForecastObject: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORECAST_ERROR:
      console.error(action.payload);
      return {
        ...state,
        // payload: error.response.statusText
        error: action.payload,
        loading: false,
      };

    case GET_SHOW_TEMP_IN_C:
      return {
        ...state,
        showTempInCelcius: action.payload
      }

    case GET_SHOW_FIVE_DAY_FORECAST_FLAG:
      return {
        ...state,
        // payload: showFiveDayForecastFlag
        showFiveDayForecastFlag: action.payload,
      }

    case GET_USER_CLICKED_WEATHER_FORECAST_OBJECT:
      return {
        ...state,
        // payload: userClickedWeatherForecastObject
        userClickedWeatherForecastObject: action.payload,
      }

    case GET_WEATHER_FORECAST:
      return {
        ...state,
        // payload: fiveDayWeatherForecastArray,
        fiveDayWeatherForecastArray: action.payload,
        loading: false,
      }

    case GET_WEATHER_FORECAST_LOCATION:
      return {
        ...state,
        // payload: 'City, Country'
        weatherForecastLocation: action.payload,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
