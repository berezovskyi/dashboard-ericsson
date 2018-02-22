import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.css';

class Button extends Component {

  render() {
    const { color, size, disabled, onClick, block, children } = this.props;

    const buttonClass = classNames(
      styles.button,
      styles[`button-${color}`],
      styles[`button-${size}`],
    );
    return <button className={buttonClass}>{children}</button>;
  }
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  disabled: false,
};

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  block: PropTypes.bool,
};

export default Button;
