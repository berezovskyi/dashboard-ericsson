import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

import HelperImage from '../../images/icons/help.svg';

class Card extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.cardouter}>
        <div>
          <h3 className={styles.cardtitle}>{title}</h3>
        </div>
        <div className={styles.helperImage}>
          <HelperImage height="24" width="24" alt="Help me" />
        </div>
        <div>
          {children}
        </div>
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
  title: PropTypes.string,
};

export default Card;
