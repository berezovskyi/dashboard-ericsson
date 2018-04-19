import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Energy.css';
import Progress from '../../../ui/Progress/Progress';
import Checkbox from '../../../ui/Form/Checkbox';

class SingleEnergyModal extends Component {
  constructor(props) {
    super(props);
    this._handleHighlight = this._handleHighlight.bind(this);
  }

  _handleHighlight(data) {
    const dispatch = this.props.dispatch;
    dispatch({
      type: 'UPDATE_ENERGY_HIGHLIGHT',
      id: data.id,
      highlighted: !data.highlighted,
    });
  }

  render() {
    const { energy } = this.props;
    return energy.valueSeq().map(row => {
      return (
        <div key={row.id} className={styles.oneEnergy}>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <h4 className={styles.title}>
                {row.name}{' - '}{row.id}{' - '}{row.to}{' from '}{row.from}
              </h4>
            </div>
            <div className={styles.oneSixth}>
              <div className={styles.checkboxEnergy}>
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

export default connect()(SingleEnergyModal);
