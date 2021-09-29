import React from 'react';

import { connect } from 'react-redux';

const Navbar = ({}) => {

  return (
    <header className="bg-primary">
      <div className="navbar-container">
        <h1 className="logo">
          <img
            src="../../.././appIcons/weathe.png"
            alt="Cloud Icon"
            className='logo__cloudIcon'
          />
          <div className='logo__weatherAppName'>
            Weather App
          </div>
        </h1>

       
      </div>
    </header>
  );
};


export default connect(null, {})(Navbar);
