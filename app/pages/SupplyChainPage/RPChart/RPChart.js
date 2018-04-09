import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from '@nivo/line';

import Card from '../../../ui/Card/Card';
import styles from './RPChart.css';

class RPChart extends Component {
  render() {
    const { id, graphdata } = this.props;
    const data = graphdata.get('day');
    return (
      <Card title="Profitability - Risk vs Time Curve" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Line
              data={data}
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

function mapStateToProps(state) {
  return {
    graphdata: state.get('performancerisk'),
  };
};

export default connect(mapStateToProps)(RPChart);
