import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.css';

class Label extends React.Component {
  render() {
    const { htmlFor, children } = this.props;
    return <label htmlFor={htmlFor} className={styles.label}>{children}</label>;
  }
}

Label.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  widths: PropTypes.array,
};

export default Label;
