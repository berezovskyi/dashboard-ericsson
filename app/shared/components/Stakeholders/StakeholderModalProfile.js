import React, { Component } from 'react';
import { connect } from 'react-redux';
import className from 'classnames';
import styles from './Stakeholders.css';

class StakeholderModalProfile extends Component {
  constructor(props) {
    super(props);
    this._handlehighlight = this._handlehighlight.bind(this);
  }

  _handlehighlight(data) {
    const { dispatch } = this.props;
    console.log(data);
    dispatch({
      type: 'UPDATE_STAKEHOLDERS_HIGHLIGHT',
      id: data.id,
      highlighted: !data.highlighted,
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
            <div className={styles.checkbox}>
              <input
                id={`checkbox-${stakeholder.id}`}
                type="checkbox"
                checked={stakeholder.highlighted}
                name="Highlight Entity"
                onChange={() => this._handlehighlight(stakeholder)}
              />
              <label
                className={styles.checkboxlabel}
                htmlFor={`checkbox-${stakeholder.id}`}
              />
            </div>
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
