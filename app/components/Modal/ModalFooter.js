import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const ModalFooter = (props) => {
  const classes = styles['modal-footer'];

  const { children } = props;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
