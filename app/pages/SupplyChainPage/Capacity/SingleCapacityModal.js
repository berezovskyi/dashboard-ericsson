import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';
import Checkbox from '../../../ui/Form/Checkbox';
import {
  UPDATE_WAREHOUSE_HIGHLIGHT,
} from '../../../entities/warehouse/actions';
import { UPDATE_RETAILER_HIGHLIGHT } from '../../../entities/retailer/actions';

class SingleCapacityModal extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  _handlehighlight(data, type) {
    const { dispatch } = this.props;
    if (type === 'warehouse') {
      dispatch({
        type: UPDATE_WAREHOUSE_HIGHLIGHT,
        payload: {
          id: data.id,
          highlighted: !data.highlighted,
        },
      });
    } else if (type === 'retailer') {
      dispatch({
        type: UPDATE_RETAILER_HIGHLIGHT,
        payload: {
          id: data.id,
          highlighted: !data.highlighted,
        },
      });
    }
  }

  render() {
    const { warehouse, retailer } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <h4>All Warehouses</h4>
          {warehouse.valueSeq().map(row => {
            return (
              <div key={row.id} className={styles.knobsingleouter}>
                <div className={styles.knobsingleinner}>
                  <Knob
                    value={row.capacity}
                    height={100}
                    width={100}
                    bgColor="#E9EFF4"
                    fgColor="#4D5AFF"
                    inputColor="#474F58"
                  />
                  <h4 className={styles.title}>{row.name}</h4>
                  <p className={styles.subtitle}>{row.id}</p>
                  <Checkbox
                    id={row.id}
                    checked={row.highlighted}
                    name="Highlight Entity"
                    onChange={() => this._handlehighlight(row, 'warehouse')}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.row}>
          <h4>All Retailers</h4>
          {retailer.valueSeq().map(row => {
            return (
              <div key={row.id} className={styles.knobsingleouter}>
                <div className={styles.knobsingleinner}>
                  <Knob
                    value={row.capacity}
                    height={100}
                    width={100}
                    bgColor="#E9EFF4"
                    fgColor="#4D5AFF"
                    inputColor="#474F58"
                  />
                  <h4 className={styles.title}>{row.name}</h4>
                  <p className={styles.subtitle}>{row.id}</p>
                  <Checkbox
                    id={row.id}
                    checked={row.highlighted}
                    name="Highlight Entity"
                    onChange={() => this._handlehighlight(row, 'retailer')}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect()(SingleCapacityModal);
