import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

import HelperImage from '../../shared/media/images/icons/help.svg';
import Popover from '../Popover/Popover';
import PopoverBody from '../Popover/PopoverBody';

class Card extends Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      helperstate: false,
      formattedDate: '-',
    };
    this._handlePopover = this._handlePopover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { date } = nextProps;
    const formattedDate = new Date(date).toLocaleTimeString('en-US');
    this.setState({ formattedDate });
  }

  _handlePopover() {
    this.setState({
      helperstate: !this.state.helperstate,
    });
  }

  render() {
    const { children, title, helpText, id } = this.props;
    const { formattedDate } = this.state;
    return (
      <div className={styles.cardouter}>
        <div>
          <h3 className={styles.cardtitle}>
            {title}
            {' '}
            -
            {' '}
            <strong className={styles.updated}>
              Last Updated: {formattedDate}
            </strong>
          </h3>
        </div>
        <div className={styles.helperImage}>
          <HelperImage
            height="24"
            width="24"
            alt="Help me"
            onClick={this._handlePopover}
            id={'HelpText' + id}
          />
        </div>
        <div>
          {children}
        </div>
        <Popover
          placement="left"
          isOpen={this.state.helperstate}
          target={'HelpText' + id}
          toggle={this._handlePopover}
        >
          <PopoverBody>
            <p>
              {helpText}
            </p>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

Card.defaultProps = {
  helpImage: true,
  helpText: 'This is the default explanation about this card.',
  title: 'This is the default title',
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  date: PropTypes.number,
};

export default Card;
