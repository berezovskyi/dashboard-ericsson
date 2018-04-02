import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Bar } from '@nivo/bar';

import Card from '../../../ui/Card/Card';

import styles from './RobotPerformanceChart.css';

const DATA = [
  {
    country: 'AD',
    'hot dog': 58,
    'hot dogColor': 'hsl(80, 70%, 50%)',
    burger: 196,
    burgerColor: 'hsl(137, 70%, 50%)',
    sandwich: 84,
    sandwichColor: 'hsl(215, 70%, 50%)',
    kebab: 59,
    kebabColor: 'hsl(59, 70%, 50%)',
    fries: 161,
    friesColor: 'hsl(72, 70%, 50%)',
    donut: 101,
    donutColor: 'hsl(148, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 96,
    'hot dogColor': 'hsl(36, 70%, 50%)',
    burger: 58,
    burgerColor: 'hsl(267, 70%, 50%)',
    sandwich: 177,
    sandwichColor: 'hsl(284, 70%, 50%)',
    kebab: 184,
    kebabColor: 'hsl(135, 70%, 50%)',
    fries: 100,
    friesColor: 'hsl(240, 70%, 50%)',
    donut: 43,
    donutColor: 'hsl(315, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 69,
    'hot dogColor': 'hsl(259, 70%, 50%)',
    burger: 119,
    burgerColor: 'hsl(168, 70%, 50%)',
    sandwich: 196,
    sandwichColor: 'hsl(283, 70%, 50%)',
    kebab: 145,
    kebabColor: 'hsl(335, 70%, 50%)',
    fries: 90,
    friesColor: 'hsl(303, 70%, 50%)',
    donut: 86,
    donutColor: 'hsl(117, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 115,
    'hot dogColor': 'hsl(4, 70%, 50%)',
    burger: 40,
    burgerColor: 'hsl(117, 70%, 50%)',
    sandwich: 5,
    sandwichColor: 'hsl(186, 70%, 50%)',
    kebab: 63,
    kebabColor: 'hsl(46, 70%, 50%)',
    fries: 31,
    friesColor: 'hsl(222, 70%, 50%)',
    donut: 172,
    donutColor: 'hsl(259, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 71,
    'hot dogColor': 'hsl(215, 70%, 50%)',
    burger: 183,
    burgerColor: 'hsl(112, 70%, 50%)',
    sandwich: 30,
    sandwichColor: 'hsl(311, 70%, 50%)',
    kebab: 13,
    kebabColor: 'hsl(130, 70%, 50%)',
    fries: 73,
    friesColor: 'hsl(26, 70%, 50%)',
    donut: 27,
    donutColor: 'hsl(127, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 43,
    'hot dogColor': 'hsl(144, 70%, 50%)',
    burger: 33,
    burgerColor: 'hsl(66, 70%, 50%)',
    sandwich: 177,
    sandwichColor: 'hsl(266, 70%, 50%)',
    kebab: 12,
    kebabColor: 'hsl(38, 70%, 50%)',
    fries: 65,
    friesColor: 'hsl(333, 70%, 50%)',
    donut: 71,
    donutColor: 'hsl(225, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 31,
    'hot dogColor': 'hsl(254, 70%, 50%)',
    burger: 192,
    burgerColor: 'hsl(86, 70%, 50%)',
    sandwich: 190,
    sandwichColor: 'hsl(268, 70%, 50%)',
    kebab: 83,
    kebabColor: 'hsl(249, 70%, 50%)',
    fries: 59,
    friesColor: 'hsl(351, 70%, 50%)',
    donut: 92,
    donutColor: 'hsl(71, 70%, 50%)',
  },
];

class RobotPerformanceChart extends Component {
  render() {
    const { id } = this.props;
    return (
      <Card title="Robot Performance Over Time" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Bar
              data={DATA}
              keys={[
                'hot dog',
                'burger',
                'sandwich',
              ]}
              indexBy="country"
              margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60,
              }}
              padding={0.3}
              colors="nivo"
              colorBy="id"
              defs={[
                {
                  id: 'dots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'fries',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'sandwich',
                  },
                  id: 'lines',
                },
              ]}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'center',
                legendOffset: 36,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'center',
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  symbolShape: 'circle',
                  translateX: 100,
                  itemWidth: 64,
                  itemHeight: 16,
                  itemsSpacing: 5,
                  symbolSize: 16,
                },
              ]}
              height={420}
              width={740}
            />
          </div>
        </div>
      </Card>
    );
  }
}

RobotPerformanceChart.propTypes = {
  id: PropTypes.string,
};

export default RobotPerformanceChart;
