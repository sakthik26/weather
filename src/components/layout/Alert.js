import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
const AlertNotif = ({ alertReducerStateAsAProp: { alert } }) => {

  if (alert === null || alert === 'undefined') {
    return null;
  } else {
    return (
      <Alert severity={alert.alertType}>
        <strong>{alert.alertText}</strong>
      </Alert>

    )
  }
};

AlertNotif.propTypes = {
  alertReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  alertReducerStateAsAProp: state.alertReducerState,
});

export default connect(mapStateToProps)(AlertNotif);
