import React, { Component } from 'react';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';

class SingleCapacityModal extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  _handlehighlight(row) {
    console.log(row);
  }

  render() {
    const { capacity, type } = this.props;
    return (
      <div className={styles.row}>
        {capacity.valueSeq().map(row => {
          if (row.type === type) {
            return (
              <div key={row.id} className={styles.knobsingleouter}>
                <div className={styles.knobsingleinner}>
                  <Knob
                    value={row.value}
                    height={100}
                    width={100}
                    bgColor="#E9EFF4"
                    fgColor="#4D5AFF"
                    inputColor="#474F58"
                  />
                  <h4 className={styles.title}>{row.name}</h4>
                  <p className={styles.subtitle}>{row.id}</p>
                  <div className={styles.checkbox}>
                    <input
                      id={`checkbox-${row.id}`}
                      type="checkbox"
                      checked={row.highlighted}
                      name="Highlight Entity"
                      onChange={() => this._handlehighlight(row)}
                    />
                    <label
                      className={styles.checkboxlabel}
                      htmlFor={`checkbox-${row.id}`}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SingleCapacityModal;
