import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Chord } from '@nivo/chord';

import { getCurrentRoute, getAvailableRobots } from '../../../utils/utils';

import Card from '../../../ui/Card/Card';
import styles from './IAChart.css';

class IAChart extends Component {
  constructor(props) {
    super(props);
    this._handleUpdate = this._handleUpdate.bind(this);
    this.state = {
      data: [],
      options: [],
      value: [],
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
    const options = graphdata.get('available');
    this.setState({
      data,
      options,
    });
  }


  render() {
    const { id } = this.props;
    const { data, options } = this.state;
    return (
      <Card title="Interoperatability curve between all available robots." id={id}>
        <Chord
          matrix={data}
          keys={options}
          margin={{
            top: 60,
            right: 60,
            bottom: 0,
            left: 60,
          }}
          padAngle={0.02}
          innerRadiusRatio={0.96}
          innerRadiusOffset={0.02}
          arcOpacity={1}
          arcBorderWidth={1}
          arcBorderColor="inherit:darker(0.4)"
          ribbonOpacity={0.5}
          ribbonBorderWidth={1}
          ribbonBorderColor="inherit:darker(0.4)"
          label="id"
          labelOffset={12}
          labelRotation={-90}
          labelTextColor="inherit:darker(1)"
          colors="nivo"
          arcHoverOpacity={1}
          arcHoverOthersOpacity={0.25}
          ribbonHoverOpacity={0.75}
          ribbonHoverOthersOpacity={0.25}
          motionStiffness={90}
          motionDamping={7}
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
          width={700}
          height={700}
        />
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    graphdata: state.get('interoperatability'),
    navigation: state.get('route'),
  };
}

IAChart.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(IAChart);
