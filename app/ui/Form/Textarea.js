import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.css';

class Textarea extends React.Component {
  render() {

    return (
      <textarea className={styles.textarea} onChange={this.props.onChange} />
    );
  }
}

Textarea.propTypes = {
  rows: PropTypes.number,
  resize: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Textarea;
