/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styles from './NotFoundPage.css';

class NotFoundPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.notfound}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.oneFull}>
              <h1 className={styles.title}>Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
