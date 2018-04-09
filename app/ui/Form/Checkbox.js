import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Form.css';

class Checkbox extends Component {
  render() {
    const { name, id, checked, onChange, className } = this.props;
    const checkboxContainerClass = classNames(
      styles.checkbox,
      className,
    );
    return (
      <div className={checkboxContainerClass}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${id}`}
          checked={checked}
          onChange={onChange}
        />
        <label className={styles.checkboxlabel} htmlFor={`checkbox-${id}`} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
