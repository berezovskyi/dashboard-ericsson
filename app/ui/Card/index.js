import React from 'react';
import Proptypes from 'prop-types';
import styles from './styles.css';

class Card extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { children } = this.props;
    return (
      <div className={styles.cardlayout}>
        <div className={styles.cardinner} {...this.props}>
          { children }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  children: Proptypes.node,
};

export default Card;
