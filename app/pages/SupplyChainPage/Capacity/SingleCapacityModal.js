import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Capacity.css';
import Knob from '../../../ui/Knob/Knob';
import Checkbox from '../../../ui/Form/Checkbox';
import { fetchCapacityIfNeeded, UPDATE_CAPACITY_HIGHLIGHT } from './actions';

class SingleCapacityModal extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCapacityIfNeeded());
  }

  _handlehighlight(data) {
    const { dispatch } = this.props;
    dispatch({
      type: UPDATE_CAPACITY_HIGHLIGHT,
      payload: {
        id: data.id,
        highlighted: !data.highlighted,
      },
    });
  }

  render() {
    const { capacity, type } = this.props;
    console.log(capacity);
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
                  <Checkbox
                    id={row.id}
                    checked={row.highlighted}
                    name="Highlight Entity"
                    onChange={() => this._handlehighlight(row)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data = state.get('capacity');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    capacity: data.get('capacity'),
  };
}

export default connect(mapStateToProps)(SingleCapacityModal);
