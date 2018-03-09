import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

import Card from '../../../components/Card/Card';
import styles from '../SupplyChainPage.css';

class RPChart extends Component {
  render() {
    return (
      <Card title="Profitability vs Risk Curve">
        <div className={styles.row}>
          <div className={styles.fourFifth}>
            <XYPlot
              width={300}
              height={300}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 },
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </div>
          <div className={styles.oneFifth}>
            <div className={styles.imageThumbnail}>
            <img src="http://placehold.it/100x100" />
            <p>Risk</p>
            </div>
            <div className={styles.imageThumbnail}>
              <img src="http://placehold.it/100x100" />
              <p>Profitability</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

RPChart.propTypes = {

};

export default RPChart;
