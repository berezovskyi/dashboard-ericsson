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

function noop() { }


const propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static']),
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  external: PropTypes.node,
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: true,
  role: 'dialog',
  labelledBy: 'dialog',
  backdrop: true,
  keyboard: true,
  onOpened: noop,
  onClosed: noop,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this._element = null;
    this._originalBodyPadding = null;
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);

    this.state = {
      isOpen: props.isOpen,
    };

    if (props.isOpen) {
      this.init();
    }
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }

    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this.state.isOpen) {
      this.destroy();
    }

    this._isMounted = false;
  }

  onOpened() {
    this.props.onOpened();
  }

  onClosed() {
    // so all methods get called before it is unmounted
    this.props.onClosed();
    this.destroy();

    if (this._isMounted) {
      this.setState({ isOpen: false });
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
  }

  handleEscape(e) {
    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
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
    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
    document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();

    setScrollbarWidth(this._originalBodyPadding);
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);
    const dialogBaseClass = classNames(
      styles['modal-dialog'],
      this.props.size ? styles[`modal-${this.props.size}`] : null,
      this.props.centered ? styles[`modal-${this.props.size}`] : null,
    );

    return (
      <div
        {...attributes}
        className={dialogBaseClass}
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
        isOpen,
        backdrop,
        labelledBy,
        external,
      } = this.props;


      return (
        <Portal node={this._element}>
          <div>
            <div
              in={isOpen}
              style={{ display: 'block' }}
              onClick={this.handleBackdropClick}
              onKeyUp={this.handleEscape}
              className={styles.modal}
              aria-labelledby={labelledBy}
              tabIndex="-1"
              role="dialog"
            >
              {external}
              {this.renderModalDialog()}
            </div>
            <div
              in={isOpen && !!backdrop}
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
