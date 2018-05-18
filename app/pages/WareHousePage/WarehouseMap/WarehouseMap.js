import React, { Component } from 'react';
import { HeatMap } from '@nivo/heatmap';

import { data } from './reducer';

import Card from '../../../ui/Card/Card';

class WarehouseMap extends Component {
  render() {
    const { id, receivedAt } = this.props;
    return (
      <Card title="Warehouse Map" id={id} date={receivedAt}>
        <HeatMap
          data={data}
          keys={[
            'Line 1',
            'Line 2',
            'Line 3',
            'Line 4',
            'Line 5',
            'Line 6',
            'Line 7',
            'Line 8',
            'Line 9',
            'Line 10',
            'Line 11',
          ]}
          width={1400}
          height={600}
          indexBy="positionY"
          margin={{
            top: 100,
            right: 109,
            bottom: 60,
            left: 160,
          }}
          cellHoverOpacity={1}
          cellHoverOthersOpacity={0.5}
          axisTop={{
            orient: 'top',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          sizeVariation={0.8}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'center',
          }}
          cellShape="circle"
          cellOpacity={1}
          cellBorderColor="inherit:darker(0.4)"
          labelTextColor="#FFFFFF"
          defs={[
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(0, 0, 0, 0.1)',
              rotation: -45,
              lineWidth: 4,
              spacing: 7,
            },
          ]}
          fill={[
            {
              id: 'lines',
            },
          ]}
          enableGridX
          enableGridY
          animate
          forceSquare={false}
          isInteractive={false}
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="cell"
          colors="greens"
          padding={5}
        />
      </Card>
    );
  }
}

WarehouseMap.propTypes = {};
export default WarehouseMap;
