import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PopperContent from '../Popper/PopperContent';

import { getTarget, DOMElement, PopperPlacements } from '../../utils/utils';

import styles from './Popover.css';

class Popover extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.getRef = this.getRef.bind(this);
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.handleProps();
  }

  componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.removeTargetEvents();
  }

  getRef(ref) {
    this._popover = ref;
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.clearHideTimeout();
    this.addTargetEvents();
    if (!this.props.isOpen) {
      this.clearShowTimeout();
    }
  }

  hide() {
    this.clearShowTimeout();
    this.removeTargetEvents();
    if (this.props.isOpen) {
      this.clearHideTimeout();
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    if (e.target !== this._target && !this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    ['click', 'touchstart'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true),
    );
  }

  removeTargetEvents() {
    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true),
    );
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  render() {
    const {
      isOpen,
      target,
      hideArrow,
      placement,
      container,
      modifiers,
      children,
    } = this.props;

    if (!this.props.isOpen) {
      return null;
    }

    const classes = classNames(
      styles['popover-inner'],
      styles[this.props.innerClassName],
    );

    const popoverOuterClasses = classNames(
      styles.popover,
      styles[`popover-${placement}`],
    );

    return (
      <PopperContent
        className={popoverOuterClasses}
        target={target}
        isOpen={isOpen}
        hideArrow={hideArrow}
        placement={placement}
        container={container}
        modifiers={modifiers}
        type="popover"
      >
        <div className={classes} ref={this.getRef}>
          {children}
        </div>
      </PopperContent>
    );
  }
}

Popover.propTypes = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement])
    .isRequired,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]),
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  innerClassName: PropTypes.string,
  toggle: PropTypes.func,
  modifiers: PropTypes.object,
  children: PropTypes.node,
};

Popover.defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  toggle: () => {},
};

export default Popover;
