import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Form.css';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    inline,
    innerRef,
    children,
  } = props;

  const formClass = classNames(
    styles[classNames],
    inline ? styles['form-inline'] : false
  );

  return (
    <form ref={innerRef} className={formClass}>
      {children}
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
