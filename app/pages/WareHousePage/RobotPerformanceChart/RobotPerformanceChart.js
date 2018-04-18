import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Bar } from '@nivo/bar';
import Select from 'react-select';
import Card from '../../../ui/Card/Card';
import { getCurrentRoute } from '../../../utils/utils';

import styles from './RobotPerformanceChart.css';

class RobotPerformanceChart extends Component {
  constructor(props) {
    super(props);
    this._handleLegend = this._handleLegend.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      selectedOption: '',
    };
  }

  _handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  _handleLegend(data) {
    switch (data) {
      case 'day':
        return 'Time (24h)';
      case 'week':
        return 'Time (days)';
      case 'month':
        return 'Time (month)';
      case 'year':
        return 'Time (years)';
      default:
        return 'Time';
    }
  }

  render() {
    const { id, keys, robotid, graphdata, navigation } = this.props;
    const { selectedOption } = this.state;
    const search = getCurrentRoute(navigation);
    const legend = this._handleLegend(search.subroute.time);
    const datafrom0 = graphdata.get(robotid[0]).performance[
      search.subroute.time
    ];
    const datafrom1 = graphdata.get(robotid[1]).performance[
      search.subroute.time
    ];
    const datafrom2 = graphdata.get(robotid[2]).performance[
      search.subroute.time
    ];
    const data1 = [...datafrom0 , ...datafrom1,...datafrom2];
    console.log(data1);
    return (
      <Card title="Robot Performance Over Time" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Select
              name="form-field-name"
              value={selectedOption}
              onChange={this._handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
            <Bar
              data={data1}
              keys={keys}
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
                legend: legend,
                legendPosition: 'center',
                legendOffset: 40,
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
    keys: state.get('robotperformance').map(row => row.name).toArray(),
    robotid: state.get('robotperformance').map(row => row.id).toArray(),
    navigation: state.get('route'),
  };
}

RobotPerformanceChart.propTypes = {
  id: PropTypes.string,
  legend: PropTypes.array,
};

RobotPerformanceChart.defaultProps = {
  legend: [],
};

export default connect(mapStateToProps)(RobotPerformanceChart);
