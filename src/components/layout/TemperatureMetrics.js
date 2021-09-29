import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShowTemperatureInCelciusFlagAction } from '../../actions/forecastActions';


const TemperatureMetrics = ({forecastReducerStateAsAProp: {showTempInCelcius},getShowTemperatureInCelciusFlagAction}) => {

    return (
        <FormControl component="fieldset">
        <FormLabel component="legend" style={{ marginTop: '40px'}}>Temperature (units) </FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="celcius" checked={showTempInCelcius===true} control={<Radio />} onChange={()=>getShowTemperatureInCelciusFlagAction(true)} label="Celcius" />
          <FormControlLabel value="fahrenheit" checked={showTempInCelcius===false} control={<Radio />} onChange={()=>getShowTemperatureInCelciusFlagAction(false)} label="Fahrenheit" />
        </RadioGroup>
      </FormControl>
    )
};

TemperatureMetrics.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState
})

export default connect(mapStateToProps,{getShowTemperatureInCelciusFlagAction})(TemperatureMetrics);