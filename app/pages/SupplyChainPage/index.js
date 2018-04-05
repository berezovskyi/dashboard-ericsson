import React from 'react';
import * as qs from 'query-string';

import Capacity from './Capacity/Capacity';
import Truck from './Truck/Truck';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';
import Notes from '../../shared/components/Notes/Notes';

import styles from './SupplyChainPage.css';
import RPChart from './RPChart/RPChart';

class SupplyChainPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const route = qs.parse(location.search);

    return (
      <div className={styles.fullPage}>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Capacity id="capactiy" route={route.type} />
          </div>
          <div className={styles.oneHalf}>
            <Truck id="truck" route={route.type} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <RPChart id="rpchrt" route={route.type} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders
              id="stakeholder"
              type="sc"
              name="Supply Chain Level"
              route={route.type}
            />
          </div>
          <div className={styles.oneHalf}>
            <Notes id="notes" type="sc" name="Supply Chain Level" route={route.type} />
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyChainPage;
