import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Progress.css';

class Progress extends Component {  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  getColor(percent) {
    if (percent > 80) {
      return 'bg-success';
    } else if (percent < 20) {
      return 'bg-alert';
    } else {
      return 'bg-primary';
    }
  }
  render() {
    const {
      value,
      max,
      reverse,
    } = this.props;

    const percent = (value / max) * 100;

    const color = this.getColor(percent);
    const progressClass = classNames(
      styles['progress-bar'],
      styles[color],
      reverse ? styles.reverse : null,
    );
    return (
      <div className={styles.progress}>
        <div
          className={progressClass}
          style={{ width: `${percent}%` }}
          data-value={value}
          data-min={0}
          data-max={max}
        />
      </div>
    );
  }
}

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  reverse: PropTypes.bool,
};

Progress.defaultProps = {
  value: 0,
  max: 100,
  reverse: false,

};

export default Progress;
