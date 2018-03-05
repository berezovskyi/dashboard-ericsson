import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.css';

class Button extends Component {  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const { color, size, disabled, block, children, id } = this.props;

    const buttonClass = classNames(
      styles.button,
      styles[`button-${color}`],
      styles[`button-${size}`],
      disabled ? styles[`button-${disabled}`] : null,
      block ? styles[`button-${block}`] : null,
    );
    return <button className={buttonClass} onClick={this.onClick} id={id}>{children}</button>;
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
  id: PropTypes.string,
};

export default Button;
