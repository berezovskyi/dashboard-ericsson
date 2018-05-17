import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Battery.css';
import Progress from '../../../ui/Progress/Progress';
import Checkbox from '../../../ui/Form/Checkbox';

class SingleBatteryModal extends Component {
  constructor(props) {
    super(props);
    this._handleHighlight = this._handleHighlight.bind(this);
  }

  _handleHighlight(data) {
    const dispatch = this.props.dispatch;
    dispatch({
      type: 'UPDATE_BATTERY_HIGHLIGHT',
      id: data.id,
      highlightedBattery: !data.highlightedBattery,
    });
  }

  render() {
    const { robots } = this.props;
    return robots.valueSeq().map(row => {
      return (
        <div key={row.id} className={styles.oneBattery}>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <h4 className={styles.title}>
                {row.name}{' - '}{row.id}{' - '}{row.to.name}{' from '}{row.from.name}
              </h4>
            </div>
            <div className={styles.oneSixth}>
              <div className={styles.checkboxBattery}>
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
              <Progress value={row.timetoreturn} />
            </div>
            <div className={styles.oneSixth}>
              <span className={styles['text-modal']}>
                {row.timetoreturn}{'% left'}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default connect()(SingleBatteryModal);
