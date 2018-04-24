import React, { Component } from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import { UPDATE_STAKEHOLDERS_HIGHLIGHT } from './actions';

import Checkbox from '../../../ui/Form/Checkbox';
import styles from './Stakeholders.css';

class StakeholderModalProfile extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  _handlehighlight(data) {
    const { dispatch } = this.props;
    dispatch({
      type: UPDATE_STAKEHOLDERS_HIGHLIGHT,
      payload: {
        id: data.id,
        highlighted: !data.highlighted,
      },
    });
  }

  render() {
    const { stakeholders, type } = this.props;
    const modalprofileList = className(styles.row, styles.profilelist);
    return stakeholders.valueSeq().map(stakeholder => {
      if (stakeholder.type === type) {
        return (
          <div className={styles.container} key={stakeholder.id}>
            <div className={modalprofileList}>
              <div className={styles.oneFifth}>
                <img
                  className={styles.stakeholderphoto}
                  src="http://placehold.it/100x100"
                />
              </div>
              <div className={styles.threeFifth}>
                <h5 className={styles.stakeholdername}>{stakeholder.name}</h5>
                <p className={styles.stakeholderemail}>{stakeholder.email}</p>
                <p className={styles.stakeholderphone}>{stakeholder.phone}</p>
              </div>
            </div>
            <Checkbox
              className={styles.stakeholdercheckbox}
              id={stakeholder.id}
              checked={stakeholder.highlighted}
              name="Highlight Entity"
              onChange={() => this._handlehighlight(stakeholder)}
            />
          </div>
        );
      }
    });
  }
}

function mapStateToProps(store) {
  return {};
}
export default connect(mapStateToProps)(StakeholderModalProfile);
