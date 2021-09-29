import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherForecastAction, setLoadingAction } from '../../actions/forecastActions';
import { setAlertAction } from '../../actions/alertActions';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";

const Search = ({ getWeatherForecastAction, setAlertAction, setLoadingAction }) => {
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    const defaultSearchText = 'Munich';
    getWeatherForecastAction(defaultSearchText);
    setSearchText(defaultSearchText)
  }, []);

  const onChangeSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitSearchText = (event) => {
    event.preventDefault();

    if (searchText === '') {
      setAlertAction('Please enter a location', 'error');
    } else {
      getWeatherForecastAction(searchText);
    }
  };
  
  return (
    <div class="search-and-refresh">
       <InputLabel htmlFor="input-with-icon-adornment" style={{margin:'10px 0px'}}>Location:</InputLabel>
       <div class="search-refresh">
       <TextField id="standard-basic" variant="outlined"
          value={searchText}
          style = {{width: '40%', marginRight: '20px'}} 
          onChange={onChangeSearchText}/>

        <Button variant="outlined" onClick={onSubmitSearchText} style={{marginRight:'20px'}}>Search</Button>
    
        <Button variant="outlined" style={{float:'right'}} onClick={onSubmitSearchText}>Refresh</Button>
        </div>
    </div>
  );
};

Search.propTypes = {
  getWeatherForecastAction: PropTypes.func.isRequired,
  setAlertAction: PropTypes.func.isRequired,
}

export default connect(null, { getWeatherForecastAction, setAlertAction, setLoadingAction })(Search);
