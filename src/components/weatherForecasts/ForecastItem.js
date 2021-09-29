import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { getWeatherImage } from '../../helpers/helperFunctions';
// Imports for using Redux app level state inside a component
import { connect } from 'react-redux';
// NOTE: Whenever you call an action from a component, you have to import that action
import { getUserClickedWeatherForecastObjectAction } from '../../actions/forecastActions';
// Imports for Components
import Preloader from '../layout/Preloader';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ForecastItem = ({
  forecastReducerStateAsAProp: { showFiveDayForecastFlag, showTempInCelcius },
  getUserClickedWeatherForecastObjectAction,
  singleDayWeatherForecastObject,
}) => {

  if (singleDayWeatherForecastObject === null) {
    return <Preloader />;
  } else {
    return (

      <Card style={{margin: '20px 10px', width: '350px'}}>
      <CardMedia
        
        height="140"
        style={{ display: 'flex',justifyContent: 'center'}}
        alt="green iguana"
      >{getWeatherImage(singleDayWeatherForecastObject.weather[0].icon)}</CardMedia>
      <CardContent>
        <Typography gutterBottom component="div">
          <Moment format="MMMM Do, YYYY">
             {new Date(singleDayWeatherForecastObject['dt'])}
          </Moment>
          <Typography  component="div">
          {singleDayWeatherForecastObject.weather[0].main} 
          </Typography>
        </Typography>
        <Typography color="text.secondary">
          {showTempInCelcius == true ? Math.round(singleDayWeatherForecastObject.main.tempincelcius) + ' °C' : Math.round(singleDayWeatherForecastObject.main.temp) + ' °F'}
        </Typography>
         {/* A 'Details" button */}
        
      </CardContent>
       </Card>
   
    )
  }
}

ForecastItem.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
  getUserClickedWeatherForecastObjectAction: PropTypes.func.isRequired,
  singleDayWeatherForecastObject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps, { getUserClickedWeatherForecastObjectAction })(ForecastItem);