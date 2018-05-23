import React, { Component } from 'react';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';
import Tooltip from '../../../ui/Tooltip/Tooltip';

class SingleCapacityItem extends Component {
  constructor(props) {
    super(props);
    this._handleTooltip = this._handleTooltip.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  _handleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    const { data, current } = this.props;

    const currentWarehouse = current ? styles.currentwarehouse : styles.notcurrentwarehouse;
    console.log(current);
    return (
      <div key={data.id} className={styles.knobsingleouter}>
        <div className={styles.knobsingleinner}>
          <div className={currentWarehouse}>
            <Knob
              value={data.capacity}
              height={100}
              width={100}
              bgColor="#E9EFF4"
              inputColor="#474F58"
            />
            <h4 className={styles.title}>
              <span id={`Tooltip-${data.id}`}>{data.name}</span>
              <Tooltip
                target={`Tooltip-${data.id}`}
                toggle={this._handleTooltip}
                isOpen={this.state.tooltipOpen}
                placement="right"
                autohide={false}
              >
                {data.location.name}
              </Tooltip>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default class SingleCapacity extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.row}>
        {data.valueSeq().map(row => {
          if (row.highlighted) {
            return <SingleCapacityItem data={row} current={row.current} />;
          }
          return <span key={row.id} />;
        })}
      </div>
    );
  }
}
