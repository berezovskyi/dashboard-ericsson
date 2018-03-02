import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.css';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const PopoverBody = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    styles[className],
    styles['popover-body']
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverBody.propTypes = propTypes;
PopoverBody.defaultProps = defaultProps;

export default PopoverBody;
