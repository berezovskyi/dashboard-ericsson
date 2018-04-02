import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from '@nivo/line';

import Card from '../../../ui/Card/Card';
import styles from './RPChart.css';

const DATA = [
  {
    id: 'whisky',
    color: 'hsl(10, 70%, 50%)',
    data: [
      {
        color: 'hsl(151, 70%, 50%)',
        x: 'BQ',
        y: 57,
      },
      {
        color: 'hsl(353, 70%, 50%)',
        x: 'EH',
        y: 58,
      },
      {
        color: 'hsl(315, 70%, 50%)',
        x: 'TC',
        y: 29,
      },
      {
        color: 'hsl(91, 70%, 50%)',
        x: 'JM',
        y: 18,
      },
      {
        color: 'hsl(119, 70%, 50%)',
        x: 'NA',
        y: 15,
      },
      {
        color: 'hsl(116, 70%, 50%)',
        x: 'SX',
        y: 14,
      },
      {
        color: 'hsl(292, 70%, 50%)',
        x: 'AW',
        y: 2,
      },
      {
        color: 'hsl(70, 70%, 50%)',
        x: 'NU',
        y: 20,
      },
      {
        color: 'hsl(171, 70%, 50%)',
        x: 'BJ',
        y: 26,
      },
    ],
  },
  {
    id: 'rhum',
    color: 'hsl(135, 70%, 50%)',
    data: [
      {
        color: 'hsl(105, 70%, 50%)',
        x: 'BQ',
        y: 56,
      },
      {
        color: 'hsl(203, 70%, 50%)',
        x: 'EH',
        y: 45,
      },
      {
        color: 'hsl(299, 70%, 50%)',
        x: 'TC',
        y: 56,
      },
      {
        color: 'hsl(171, 70%, 50%)',
        x: 'JM',
        y: 1,
      },
      {
        color: 'hsl(39, 70%, 50%)',
        x: 'NA',
        y: 32,
      },
      {
        color: 'hsl(244, 70%, 50%)',
        x: 'SX',
        y: 39,
      },
      {
        color: 'hsl(308, 70%, 50%)',
        x: 'AW',
        y: 26,
      },
      {
        color: 'hsl(81, 70%, 50%)',
        x: 'NU',
        y: 44,
      },
      {
        color: 'hsl(198, 70%, 50%)',
        x: 'BJ',
        y: 9,
      },
    ],
  },
  {
    id: 'gin',
    color: 'hsl(59, 70%, 50%)',
    data: [
      {
        color: 'hsl(196, 70%, 50%)',
        x: 'BQ',
        y: 33,
      },
      {
        color: 'hsl(193, 70%, 50%)',
        x: 'EH',
        y: 12,
      },
      {
        color: 'hsl(353, 70%, 50%)',
        x: 'TC',
        y: 36,
      },
      {
        color: 'hsl(196, 70%, 50%)',
        x: 'JM',
        y: 49,
      },
      {
        color: 'hsl(119, 70%, 50%)',
        x: 'NA',
        y: 15,
      },
      {
        color: 'hsl(0, 70%, 50%)',
        x: 'SX',
        y: 18,
      },
      {
        color: 'hsl(148, 70%, 50%)',
        x: 'AW',
        y: 20,
      },
      {
        color: 'hsl(214, 70%, 50%)',
        x: 'NU',
        y: 27,
      },
      {
        color: 'hsl(186, 70%, 50%)',
        x: 'BJ',
        y: 2,
      },
    ],
  },
  {
    id: 'vodka',
    color: 'hsl(34, 70%, 50%)',
    data: [
      {
        color: 'hsl(169, 70%, 50%)',
        x: 'BQ',
        y: 6,
      },
      {
        color: 'hsl(76, 70%, 50%)',
        x: 'EH',
        y: 50,
      },
      {
        color: 'hsl(330, 70%, 50%)',
        x: 'TC',
        y: 9,
      },
      {
        color: 'hsl(337, 70%, 50%)',
        x: 'JM',
        y: 43,
      },
      {
        color: 'hsl(250, 70%, 50%)',
        x: 'NA',
        y: 2,
      },
      {
        color: 'hsl(31, 70%, 50%)',
        x: 'SX',
        y: 60,
      },
      {
        color: 'hsl(241, 70%, 50%)',
        x: 'AW',
        y: 52,
      },
      {
        color: 'hsl(251, 70%, 50%)',
        x: 'NU',
        y: 13,
      },
      {
        color: 'hsl(350, 70%, 50%)',
        x: 'BJ',
        y: 48,
      },
    ],
  },
  {
    id: 'cognac',
    color: 'hsl(169, 70%, 50%)',
    data: [
      {
        color: 'hsl(231, 70%, 50%)',
        x: 'BQ',
        y: 16,
      },
      {
        color: 'hsl(225, 70%, 50%)',
        x: 'EH',
        y: 47,
      },
      {
        color: 'hsl(103, 70%, 50%)',
        x: 'TC',
        y: 18,
      },
      {
        color: 'hsl(184, 70%, 50%)',
        x: 'JM',
        y: 2,
      },
      {
        color: 'hsl(174, 70%, 50%)',
        x: 'NA',
        y: 51,
      },
      {
        color: 'hsl(122, 70%, 50%)',
        x: 'SX',
        y: 30,
      },
      {
        color: 'hsl(112, 70%, 50%)',
        x: 'AW',
        y: 46,
      },
      {
        color: 'hsl(308, 70%, 50%)',
        x: 'NU',
        y: 56,
      },
      {
        color: 'hsl(5, 70%, 50%)',
        x: 'BJ',
        y: 17,
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
      <Card title="Profitability vs Risk Curve" id={id}>
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
                legend: 'country code',
                legendOffset: 36,
                legendPosition: 'center',
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'center',
              }}
              enableDots={false}
              dotSize={10}
              dotColor="inherit:darker(0.3)"
              dotBorderWidth={2}
              dotBorderColor="#ffffff"
              dotLabel="y"
              dotLabelYOffset={-12}
              areaOpacity={0}
              motionStiffness={90}
              motionDamping={28}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 100,
                  itemWidth: 80,
                  itemHeight: 20,
                  symbolSize: 12,
                  symbolShape: 'circle',
                },
              ]}
              width={1400}
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
