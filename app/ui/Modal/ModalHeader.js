import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const ModalHeader = (props) => {
  const {
    children,
  } = props;

  const classes = styles['modal-header'];

  return (
    <div className={classes}>
      <h2 className={styles['modal-title']}>
        {children}
      </h2>
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
};


export default ModalHeader;
