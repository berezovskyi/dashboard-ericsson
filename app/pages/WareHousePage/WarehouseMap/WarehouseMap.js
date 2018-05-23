import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeatMap } from '@nivo/heatmap';

import { data } from './reducer';
import Card from '../../../ui/Card/Card';
import WarehouseModal from './WarehouseModal';

class WarehouseMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapModal: false,
    };
    this._handleModalToggle = this._handleModalToggle.bind(this);
  }

  _handleModalToggle(node, event) {
    const { mapModal } = this.state;
    this.setState({
      mapModal: !mapModal,
    });
  }
  render() {
    const { id, receivedAt } = this.props;
    const { mapModal } = this.state;
    return (
      <Card
        title="Warehouse Map"
        id={id}
        helpText="This is the map of the warehouse, the data in the center represents the current battery % left of the robot. To know more about the state of the robot, click on it"
        date={receivedAt}
      >
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
            'Line 12',
            'Line 13',
            'Line 14',
            'Line 15',
            'Line 16',
            'Line 17',
            'Line 18',
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
          onClick={this._handleModalToggle}
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
        <WarehouseModal
          handleClick={this._handleModalToggle}
          isOpen={mapModal}
          id="12341-41230"
        />
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const robot = state.get('robots');
  console.log(robot);
  return {
    receivedAt: robot.get('receivedAt'),
  };
}

WarehouseMap.propTypes = {};

export default connect(mapStateToProps)(WarehouseMap);
