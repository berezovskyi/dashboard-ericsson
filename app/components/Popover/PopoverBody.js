import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Popover.css';

class PopoverBody extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;

    const classes = classNames(
      styles['popover-body']
    );

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

PopoverBody.propTypes = {
  children: PropTypes.node,
};

export default PopoverBody;
