import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Chord } from '@nivo/chord';

import Card from '../../../ui/Card/Card';
import styles from './IAChart.css';


class IAChart extends Component {
  render() {
    const { id, graphdata } = this.props;
    const data = graphdata.get('day');
    return (
      <Card title="Interoperatability curve" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Chord
              matrix={data}
              keys={['AR1', 'AR2', 'ARM1', 'ARM2', 'ARM3']}
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
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    graphdata: state.get('interoperatability'),
  };
}

IAChart.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(IAChart);
