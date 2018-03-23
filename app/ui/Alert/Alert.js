import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Alert.css';

function Alert(props) {
  const {
    color,
    children,
  } = props;

  const classes = classNames(
    styles.alert,
    styles[`alert-${color}`],
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  toggle: PropTypes.func,
};

Alert.defaultProps = {
  color: 'primary',
};

export default Alert;
