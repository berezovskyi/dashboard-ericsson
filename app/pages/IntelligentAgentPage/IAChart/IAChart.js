import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Chord } from '@nivo/chord';

import { getCurrentRoute } from '../../../utils/utils';

import Card from '../../../ui/Card/Card';
import {
  fetchIODataIfNeeded,
} from '../../../entities/interoperability/actions';

import styles from './IAChart.css';

class IAChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const search = getCurrentRoute(navigation);
    dispatch(fetchIODataIfNeeded(search.subroute.time));
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = nextProps;
    const { dispatch } = this.props;
    if (nextProps.navigation !== this.props.navigation) {
      const search = getCurrentRoute(navigation);
      dispatch(fetchIODataIfNeeded(search.subroute.time));
    }
  }

  render() {
    const { id, data } = this.props;
    console.log(data);
    return (
      <Card
        title="Interoperatability curve between all available robots."
        id={id}
      >
        <div className={styles.row}>
          <div className={styles.oneFull}>
            {data.available.length > 0
              ? <Chord
                  matrix={data.value}
                  keys={data.available}
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
              : <span />}
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const data = state.get('interoperability');
  return {
    data: data.get('data'),
    receivedAt: data.get('receivedAt'),
    navigation: state.get('route'),
  };
}

IAChart.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(IAChart);
