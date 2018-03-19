import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const ModalBody = (props) => {
  const classes = styles['modal-body'];
  const { children } = props;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
