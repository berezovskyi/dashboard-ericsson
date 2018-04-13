import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Bar } from '@nivo/bar';

import Card from '../../../ui/Card/Card';
import { getCurrentRoute } from '../../../utils/utils';

import styles from './RobotPerformanceChart.css';

class RobotPerformanceChart extends Component {
  render() {
    const { id, graphdata, navigation } = this.props;
    const search = getCurrentRoute(navigation);
    const data = graphdata.get(search.subroute.time);
    return (
      <Card title="Robot Performance Over Time" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Bar
              data={data}
              keys={['arm1', 'arm2', 'robot1']}
              indexBy="time"
              margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60,
              }}
              padding={0.4}
              colors="nivo"
              colorBy="id"
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Time (24h)',
                legendPosition: 'center',
                legendOffset: 50,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Performance (%)',
                legendPosition: 'center',
                legendOffset: -50,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#333333"
              motionStiffness={90}
              motionDamping={15}
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
              maxValue={100}
              height={420}
              width={840}
            />
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    graphdata: state.get('robotperformance'),
    navigation: state.get('route'),
  };
}

RobotPerformanceChart.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(RobotPerformanceChart);
