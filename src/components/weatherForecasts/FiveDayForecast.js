import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import ForecastItem from './ForecastItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FiveDayForecast = ({
  forecastReducerStateAsAProp: {
     fiveDayWeatherForecastArray,
     loading,
     showFiveDayForecastFlag,
     showTempInCelcius
   },
}) => {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (loading) {
    return <Preloader/>
  } else {
    return (

      <Carousel responsive={responsive}>
        
        {fiveDayWeatherForecastArray.map(
          (singleDayWeatherForecastObject, index) => (
            <ForecastItem
              singleDayWeatherForecastObject={singleDayWeatherForecastObject}
              key={index}
            />
          )
        )}
      </Carousel>
    );
  }
};

FiveDayForecast.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps)(FiveDayForecast);
