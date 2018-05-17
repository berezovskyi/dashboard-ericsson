import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Truck.css';
import Progress from '../../../ui/Progress/Progress';
import Checkbox from '../../../ui/Form/Checkbox';
import { fetchTrucksIfNeeded, UPDATE_TRUCKS_HIGHLIGHT } from '../../../entities/truck/actions';

class SingleTruckModal extends Component {
  constructor(props) {
    super(props);
    this._handleHighlight = this._handleHighlight.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTrucksIfNeeded());
  }

  _handleHighlight(data) {
    const { dispatch } = this.props ;
    dispatch({
      type: UPDATE_TRUCKS_HIGHLIGHT,
      payload: {
        id: data.id,
        highlighted: !data.highlighted,
      },
    });
  }

  render() {
    const { trucks } = this.props;
    return trucks.valueSeq().map(row => {
      return (
        <div key={row.id} className={styles.oneTruck}>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <h4 className={styles.title}>
                {row.name}{' - '}{row.to.name}{' from '}{row.from.name}
              </h4>
            </div>
            <div className={styles.oneSixth}>
              <div className={styles.checkboxTruck}>
                <Checkbox
                  id={row.id}
                  checked={row.highlighted}
                  name="Highlight Entity"
                  onChange={() => this._handleHighlight(row)}
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <Progress value={row.value} />
            </div>
            <div className={styles.oneSixth}>
              <span className={styles['text-modal']}>
                {row.value}{'% completed'}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  const data = state.get('trucks');
  return {
    receivedAt: data.get('receivedAt'),
    loading: data.get('loading'),
    trucks: data.get('data'),
  };
}

export default connect(mapStateToProps)(SingleTruckModal);
