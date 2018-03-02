import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getTarget } from '../../utils/utils';

import styles from './styles.css';

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250,
};

class Popover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
  }

  componentDidMount() {
    this.target = getTarget(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this.hideTimeOut) {
      this.clearHideTimeout();
    }
    this.showTimeout = setTimeout(this.show, this.getDelay('show'));
  }

  onMouseLeaveTooltip() {
    if (this.hideTimeOut) {
      this.clearHideTimeout();
    }
    this.showTimeout = setTimeout(this.show, this.getDelay('hide'));
  }

  onMouseLeaveTooltipContent() {
    if (this.showTimeout) {
      this.clearShowTimeout();
    }
    this.hideTimeOut = setTimeout(this.hide, this.getDelay('hide'));
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return delay[key] ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
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
    clearTimeout(this.showTimeout);
    this.showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this.hideTimeOut);
    this.hideTimeOut = undefined;
  }

  handleDocumentClick(e) {
    if (e.target === this.target || this.target.contains(e.target)) {
      if (this.hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    this.target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this.target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    ['click', 'touchstart'].forEach((event) =>
      document.removeEventListener(event, this.handleDocumentClick, true),
    );
  }

  removeTargetEvents() {
    this.target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this.target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    ['click', 'touchstart'].forEach((event) =>
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
    // If it is open by default, return nothing new
    if (!this.props.isOpen) {
      return null;
    }

    const tooltipInnerClass = classNames(
      'tooltip-inner',
      this.props.innerClassName,
    );

    const tooltipClass = classNames(styles.tooltip, styles.show);

    return (
      <div
        className={tooltipClass}
        target={this.props.target}
        isOpen={this.props.isOpen}
        container={this.props.container}
      >
        <div
          className={tooltipInnerClass}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
          onFocus=""
        />
      </div>
    );
  }
}

Popover.propTypes = {
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  toggle: PropTypes.func,
  delay: PropTypes.oneOfType([
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  innerClassName: PropTypes.string,
};

Popover.defaultProps = {
  isOpen: false,
  disabled: false,
  toggle: () => {},
  delay: DEFAULT_DELAYS,
};

export default Popover;
