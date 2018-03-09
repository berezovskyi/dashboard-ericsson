import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
} from 'react-vis';

import Card from '../../../components/Card/Card';
import styles from '../SupplyChainPage.css';

const DATA = [
  [{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }],
  [{ x: 1, y: 10 }, { x: 2, y: 4 }, { x: 3, y: 2 }, { x: 4, y: 15 }],
];

class RPChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };

    this.onNearestX = this.onNearestX.bind(this);
  }

  onMouseLeave() {
    this.setState({ crosshairValues: [] });
  }

  onNearestX(value, { index }) {
    this.setState({
      crosshairValues: DATA.map(d => d[index].y !== null && d[index]),
    });
  }

  render() {
    return (
      <Card title="Profitability vs Risk Curve">
        <div className={styles.row}>
          <div className={styles.threeFifth}>
            <XYPlot xType="linear" width={960} height={300}>
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries
                curve={'curveMonotoneX'}
                onNearestX={this.onNearestX}
                data={DATA[0]}
              />
              <LineSeries data={null} />
              <LineSeries
                curve={'curveMonotoneX'}
                onNearestX={this.onNearestX}
                data={DATA[1]}
              />
              <Crosshair values={this.state.crosshairValues} />
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

RPChart.propTypes = {};

export default RPChart;
