import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Preloader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop:'100px'}}>
    <CircularProgress />
    </div>

  );
};

export default Preloader;
