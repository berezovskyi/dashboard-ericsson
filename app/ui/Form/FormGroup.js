import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Form.css';

const FormGroup = (props) => {
  const {
    className,
    row,
    disabled,
    check,
    inline,
    children,
  } = props;

  const classes = classNames(
    styles[className],
    row ? styles.row : false,
    check ? styles['form-check'] : styles['form-group'],
    check && inline ? styles['form-check-inline'] : false,
    check && disabled ? styles.disabled : false
  );

  return (
    <div className={classes}>{children}</div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

export default FormGroup;
