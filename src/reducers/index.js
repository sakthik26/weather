import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import forecastReducer from './forecastReducer';

export default combineReducers({
  alertReducerState: alertReducer,
  forecastReducerState: forecastReducer,
});