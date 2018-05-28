import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import { Bar } from '@nivo/bar';

import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Form/Input';
import Card from '../../../ui/Card/Card';
import { getCurrentRoute } from '../../../utils/utils';
import { getArrayofObjectsKeys } from '../../../utils/utils';
import Form from '../../../ui/Form/Form';
import FormGroup from '../../../ui/Form/FormGroup';

import styles from './RobotPerformanceChart.css';
import {
  fetchPerfDataIfNeeded,
} from '../../../entities/robotperformance/actions';

class RobotPerformanceChart extends Component {
  constructor(props) {
    super(props);
    this._handleSelectChange = this._handleSelectChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleFormUpdate = this._handleFormUpdate.bind(this);
    this.state = {
      graphdata: [],
      removeSelected: true,
      disabled: false,
      value: [],
      options: [],
      valueArray: [],
    };
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const search = getCurrentRoute(navigation);
    dispatch(fetchPerfDataIfNeeded(search.subroute.time));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { navigation } = nextProps;
    if (nextProps.navigation !== this.props.navigation) {
      const search = getCurrentRoute(navigation);
      dispatch(fetchPerfDataIfNeeded(search.subroute.time));
    }
  }

  _handleSelectChange(value) {
    console.log(value);
    let { valueArray } = this.state;
    this.setState({ selectVal: value });
    valueArray = value.split(',');
    this.setState({ valueArray });
  }

  _handleUpdate(navigation, graphdata) {
    const search = getCurrentRoute(navigation);
    const data = graphdata.get(search.subroute.time);
    const options = getArrayofObjectsKeys(data);
    this.setState({
      options,
    });
  }

  _handleFormUpdate(event) {
    const { dispatch, navigation } = this.props;
    const { timestring } = this.state;
    event.preventDefault();
    const search = getCurrentRoute(navigation);
    dispatch(fetchPerfDataIfNeeded(search.subroute.time, timestring));
    this.setState({
      timestring: '',
    });
  }

  _handleChange(event) {
    this.setState({
      timestring: event.target.value,
    });
  }

  renderDatepicker({ subroute }) {
    const { timestring } = this.state;
    switch (subroute.time) {
      case 'month':
        return (
          <div className={styles.monthpicker}>
            <Form inline>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="YYYY"
                  onChange={this._handleChange}
                  value={timestring}
                />
              </FormGroup>
              <Button color="secondary" onClick={this._handleFormUpdate}>
                Search Yearwise
              </Button>
            </Form>
          </div>
        );
      case 'week':
        return (
          <div className={styles.weekpicker}>
            <Form inline>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="YYYYWW"
                  onChange={this._handleChange}
                  value={timestring}
                />
              </FormGroup>
              <Button color="secondary" onClick={this._handleFormUpdate}>
                Search Weekwise
              </Button>
            </Form>
          </div>
        );
      case 'day':
        return (
          <div className={styles.daypicker}>
            <Form inline>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="YYYYMMDD"
                  onChange={this._handleChange}
                  value={timestring}
                />
              </FormGroup>
              <Button color="secondary" onClick={this._handleFormUpdate}>
                Search Daywise
              </Button>
            </Form>
          </div>
        );
      default:
        return <span />;
    }
  }

  render() {
    const { id, data, receivedAt, navigation } = this.props;
    const { disabled, selectVal, valueArray } = this.state;
    console.log(data);
    return (
      <Card title="Robot Performance Over Time" id={id} date={receivedAt}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            {this.renderDatepicker(getCurrentRoute(navigation))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Select
              closeOnSelect={false}
              disabled={disabled}
              multi
              onChange={this._handleSelectChange}
              options={data.available}
              placeholder="Select upto 3 Robots or Arms to compare"
              removeSelected={false}
              simpleValue
              value={selectVal}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            {valueArray.length > 0 && valueArray[0] !== ''
              ? <Bar
                  data={data.value}
                  keys={valueArray}
                  indexBy="time"
                  margin={{
                    top: 50,
                    right: 130,
                    bottom: 90,
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
                      anchor: 'bottom',
                      direction: 'row',
                      symbolShape: 'circle',
                      translateX: 10,
                      translateY: 90,
                      itemWidth: 64,
                      itemHeight: 16,
                      itemsSpacing: 5,
                      symbolSize: 16,
                    },
                  ]}
                  maxValue={100}
                  height={420}
                  width={800}
                />
              : <div className={styles.oneFull}>
                  <h3 className={styles.novalue}>Select some values first.</h3>
                </div>}
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const data = state.get('robotperformance');
  return {
    data: data.get('data'),
    receivedAt: data.get('receivedAt'),
    navigation: state.get('route'),
  };
}

RobotPerformanceChart.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(RobotPerformanceChart);
