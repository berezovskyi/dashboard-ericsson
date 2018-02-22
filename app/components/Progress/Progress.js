import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import toNumber from 'lodash';

import styles from './styles.css';

class Progress extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      value,
      max,
      color,
    } = this.props;

    const percent = ((toNumber(value) / toNumber(max)) * 100);

    const progressClass = classNames(
      styles['progress-bar'],
      color ? styles[`bg-${color}`] : null,
    );
    return (
      <div className={styles.progress}>
        <div
          className={progressClass}
          style={{ width: `${percent}%` }}
          data-value={value}
          data-min="0"
          data-max={max}
        />
      </div>
    );
  }
}

Progress.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
};

Progress.defaultProps = {
  value: 0,
  max: 100,
  color: 'primary',
};

export default Progress;
