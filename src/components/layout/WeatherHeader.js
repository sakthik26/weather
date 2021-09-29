import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from './Preloader';

const WeatherHeader = ({
  forecastReducerStateAsAProp: { loading, weatherForecastLocation },
}) => {
  if (weatherForecastLocation === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return <div className="weatherHeader text-dark">{weatherForecastLocation}</div>;
  }
};

WeatherHeader.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps)(WeatherHeader);