import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from '@nivo/line';

import { getCurrentRoute } from '../../../utils/utils';
import Button from '../../../ui/Button/Button';
import Input from '../../../ui/Form/Input';
import Card from '../../../ui/Card/Card';
import Form from '../../../ui/Form/Form';
import FormGroup from '../../../ui/Form/FormGroup';
import styles from './RPChart.css';
import { fetchRPDataIfNeeded } from '../../../entities/riskperformance/actions';

const COLORS = ['#2B9062', '#F5515F'];

class RPChart extends Component {
  constructor(props) {
    super(props);
    this._handlelegend = this._handlelegend.bind(this);
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      timestring: '',
      type: '',
    };
  }

  componentDidMount() {
    const { dispatch, navigation } = this.props;
    const search = getCurrentRoute(navigation);
    dispatch(fetchRPDataIfNeeded(search.subroute.time));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { navigation } = nextProps;
    if (nextProps.navigation !== this.props.navigation) {
      const search = getCurrentRoute(navigation);
      dispatch(fetchRPDataIfNeeded(search.subroute.time));
    }
  }

  _handlelegend(data) {
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


  _handleUpdate(event) {
    const { dispatch, navigation } = this.props;
    const { timestring } = this.state;
    event.preventDefault();
    const search = getCurrentRoute(navigation);
    dispatch(fetchRPDataIfNeeded(search.subroute.time, timestring));
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
              <Button color="secondary" onClick={this._handleUpdate}>
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
              <Button color="secondary" onClick={this._handleUpdate}>
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
              <Button color="secondary" onClick={this._handleUpdate}>
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
    const { id, data, navigation, receivedAt } = this.props;
    const search = getCurrentRoute(navigation);
    const legend = this._handlelegend(search.subroute.time);
    return (
      <Card title="Profitability - Risk vs Time Curve" id={id} date={receivedAt}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            {this.renderDatepicker(getCurrentRoute(navigation))}
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
                    legend,
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
                  animate={false}
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
