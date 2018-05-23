import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopperContent from '../Popper/PopperContent';

import styles from './Tooltip.css';

import { getTarget, DOMElement, PopperPlacements } from '../../utils/utils';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(
      this,
    );
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(this.show, 0);
  }

  onMouseLeaveTooltip() {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide, 150);
  }

  onMouseOverTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
  }

  onMouseLeaveTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide, 150);
  }

  show() {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
  }

  hide() {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle();
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
    const { isOpen } = this.props;
    if (e.target === this._target || this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
    this._target.addEventListener('focusin', this.show, true);
    this._target.addEventListener('focusout', this.hide, true);

    ['click', 'touchstart'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true),
    );
  }

  removeTargetEvents() {
    this._target.removeEventListener(
      'mouseover',
      this.onMouseOverTooltip,
      true,
    );
    this._target.removeEventListener(
      'mouseout',
      this.onMouseLeaveTooltip,
      true,
    );
    this._target.addEventListener('focusin', this.show, true);
    this._target.addEventListener('focusout', this.hide, true);

    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true),
    );
  }

  toggle(e) {
    const { disabled, toggle } = this.props;
    if (disabled) {
      return e && e.preventDefault();
    }

    return toggle();
  }

  render() {
    const {
      className,
      target,
      isOpen,
      hideArrow,
      placement,
      container,
      modifiers,
      offset,
      children,
    } = this.props;

    if (!isOpen) {
      return null;
    }

    const popperClasses = classNames(styles.tooltip, styles.show, className);

    return (
      <PopperContent
        className={popperClasses}
        target={target}
        isOpen={isOpen}
        hideArrow={hideArrow}
        placement={placement}
        container={container}
        modifiers={modifiers}
        offset={offset}
        type="tooltip"
      >
        <div
          className={styles['tooltip-inner']}
          role="tooltip"
          aria-hidden={isOpen}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
        >
          {children}
        </div>
      </PopperContent>
    );
  }
}

Tooltip.propTypes = {
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
  className: PropTypes.string,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Tooltip.defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  autohide: true,
  toggle: () => {},
};

export default Tooltip;
