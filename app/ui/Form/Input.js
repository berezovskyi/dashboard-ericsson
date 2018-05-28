import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.css';

class Input extends Component {
  render() {
    let {
      type,
      innerRef,
      placeholder,
    } = this.props;

    return (
      <input type={type} ref={innerRef} className={styles.input} placeholder={placeholder} />
    );
  }
}

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
