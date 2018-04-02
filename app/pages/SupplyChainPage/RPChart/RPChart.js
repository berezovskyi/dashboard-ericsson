import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from '@nivo/line';

import Card from '../../../ui/Card/Card';
import styles from './RPChart.css';

const DATA = [
  {
    id: 'performance',
    data: [
      {
        x: '0000',
        y: 57,
      },
      {
        x: '0200',
        y: 58,
      },
      {
        x: '0400',
        y: 29,
      },
      {
        x: '0600',
        y: 18,
      },
      {
        x: '0800',
        y: 15,
      },
      {
        x: '1000',
        y: 14,
      },
      {
        x: '1200',
        y: 2,
      },
      {
        x: '1400',
        y: 20,
      },
      {
        x: '1600',
        y: 26,
      },
      {
        x: '1800',
        y: 26,
      },
      {
        x: '2000',
        y: 26,
      },
      {
        x: '2200',
        y: 26,
      },
      {
        x: '2359',
        y: 26,
      },
    ],
  },
  {
    id: 'risk',
    data: [
      {
        x: '0000',
        y: 56,
      },
      {
        x: '0200',
        y: 45,
      },
      {
        x: '0400',
        y: 56,
      },
      {
        x: '0600',
        y: 1,
      },
      {
        x: '0800',
        y: 32,
      },
      {
        x: '1000',
        y: 39,
      },
      {
        x: '1200',
        y: 26,
      },
      {
        x: '1400',
        y: 44,
      },
      {
        x: '1600',
        y: 9,
      },
      {
        x: '1800',
        y: 9,
      },
      {
        x: '2000',
        y: 9,
      },
      {
        x: '2200',
        y: 9,
      },
      {
        x: '2359',
        y: 9,
      },
    ],
  },
];

class RPChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    return (
      <Card title="Profitability - Risk vs Time Curve" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Line
              data={DATA}
              margin={{
                top: 50,
                right: 110,
                bottom: 50,
                left: 60,
              }}
              minY="auto"
              curve="monotoneX"
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Time (24h)',
                legendOffset: 50,
                legendPosition: 'center',
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Percentage (%)',
                legendOffset: -40,
                legendPosition: 'center',
              }}
              enableDots={false}
              enableGridX={false}
              areaOpacity={0}
              motionStiffness={90}
              motionDamping={28}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'top-right',
                  direction: 'row',
                  symbolShape: 'circle',
                  translateX: 10,
                  translateY: -40,
                  itemWidth: 64,
                  itemHeight: 16,
                  itemsSpacing: 5,
                  symbolSize: 16,
                },
              ]}
              maxY={100}
              width={1600}
              height={500}
            />
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
