import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import { Bar } from '@nivo/bar';

import Card from '../../../ui/Card/Card';
import { getCurrentRoute } from '../../../utils/utils';

import styles from './RobotPerformanceChart.css';

class RobotPerformanceChart extends Component {
  constructor(props) {
    super(props);
    this._handleSelectChange = this._handleSelectChange.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleUpdate = this._handleUpdate.bind(this);
    this.state = {
      selectValue: ['arm1', 'arm2', 'robot1'],
      data: [],
    };
  }

  componentDidMount() {
    const { navigation, graphdata } = this.props;
    this._handleUpdate(navigation, graphdata);
  }

  componentWillReceiveProps(nextProps) {
    const { navigation, graphdata } = nextProps;
    this._handleUpdate(navigation, graphdata);
  }

  _handleUpdate(navigation, graphdata) {
    const search = getCurrentRoute(navigation);
    const data = graphdata.get(search.subroute.time);
    this.setState({
      data: data,
    });
    console.log(this.state.data);
  }

  _handleSelectChange() {}

  _handleRemove() {}

  render() {
    const { id, options } = this.props;
    const { selectValue, data } = this.state;

    return (
      <Card title="Robot Performance Over Time" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Select
              closeOnSelect={false}
              multi
              disabled={selectValue.length > 3}
              onChange={this._handleSelectChange}
              options={options}
              placeholder="Select Robots (Upto 3)"
              removeSelected={this.state._handleRemove}
              simpleValue
              value={selectValue}
            />
            <Bar
              data={data}
              keys={selectValue}
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
