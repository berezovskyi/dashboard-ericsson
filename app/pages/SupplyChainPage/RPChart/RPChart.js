import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from '@nivo/line';

import { getCurrentRoute } from '../../../utils/utils';
import Card from '../../../ui/Card/Card';
import styles from './RPChart.css';
import { fetchRPDataIfNeeded } from '../../../entities/riskperformance/actions';

const COLORS = ['#2B9062', '#F5515F'];

class RPChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRPDataIfNeeded('year'));
  }

  render() {
    const { id, data } = this.props;
    console.log(data);
    return (
      <Card title="Profitability - Risk vs Time Curve" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            {data.length > 0
              ? <Line
                  data={data}
                  colors={COLORS}
                  margin={{
                    top: 50,
                    right: 110,
                    bottom: 50,
                    left: 60,
                  }}
                  lineWidth={1}
                  minY="auto"
                  curve="linear"
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'years',
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
              : <span />}

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
  const data = state.get('performancerisk');
  return {
    data: data.get('data'),
    receivedAt: data.get('receivedAt'),
    navigation: state.get('route'),
  };
}

export default connect(mapStateToProps)(RPChart);
