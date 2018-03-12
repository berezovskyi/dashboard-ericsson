import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import classNames from 'classnames';

import styles from './styles.css';

import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  omit,
} from '../../utils/utils';


const propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  toggle: PropTypes.func,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static']),
  ]),
  children: PropTypes.node,
  external: PropTypes.node,
  in: PropTypes.bool,
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  labelledBy: 'dialog',
  backdrop: true,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this._element = null;
    this._originalBodyPadding = null;
    this.handleBackdropClick = this.handleBackdropClick.bind(this);

    this.state = {
      isOpen: props.isOpen,
    };

    if (props.isOpen) {
      this.init();
    }
  }

  componentDidMount() {
    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen && !this.state.isOpen) {
      this.init();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      this.destroy();
    }
  }

  setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  }

  handleBackdropClick(e) {
    e.stopPropagation();
    if (!this.props.isOpen || this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }

    // Fix this, this should be dependent on props.
    this.setState({
      isOpen: false,
    });

    this.destroy();
  }

  init() {
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = 1050;
    this._originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = classNames(
      document.body.className,
      styles['modal-open']
    );
  }

  destroy() {
    document.body.removeChild(this._element);
    this._element = null;

    const modalOpenClassName = styles['modal-open'];
    document.body.className = document.body.className.replace(modalOpenClassName, ' ').trim();

    setScrollbarWidth(this._originalBodyPadding);
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        {...attributes}
        className={styles['modal-dialog']}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
      >
        <div
          className={styles['modal-content']}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.isOpen) {
      const {
        labelledBy,
        external,
        isOpen,
      } = this.props;

      return (
        <Portal node={this._element}>
          <div>
            <div
              in={isOpen.toString()}
              style={{ display: 'block' }}
              onClick={this.handleBackdropClick}
              className={styles.modal}
              aria-labelledby={labelledBy}
              tabIndex="-1"
              role="dialog"
            >
              {external}
              {this.renderModalDialog()}
            </div>
            <div
              in={isOpen.toString()}
              className={styles['modal-backdrop']}
            />
          </div>
        </Portal>
      );
    }

    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
