import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import RiskCurveIcon from '../../../shared/media/images/icons/risk.png';
import ProfitCurveIcon from '../../../shared/media/images/icons/profits.png';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
} from 'react-vis';

import Card from '../../../ui/Card/Card';
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
    const { id } = this.props;
    return (
      <Card title="Profitability vs Risk Curve" id={id}>
        <div className={styles.row}>
          <div className={styles.threeFifth}>
            <XYPlot xType="linear" width={1060} height={300}>
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
              <div className={styles.imageThumbnailInner}>
                <img src={RiskCurveIcon} width={80} />
                <p>Risk</p>
              </div>
            </div>
            <div className={styles.imageThumbnail}>
              <div className={styles.imageThumbnailInner}>
                <img src={ProfitCurveIcon} width={80} />
              <p>Profitability</p>
            </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

RPChart.propTypes = {
  id: PropTypes.string,
};

export default RPChart;
