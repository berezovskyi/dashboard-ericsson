import React from 'react';
import PropTypes from 'prop-types';
import { TransitionTimeouts } from '../../utils/utils';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

function Fade(props) {
  const {
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
  );
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
