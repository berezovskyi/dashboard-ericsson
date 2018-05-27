import React, { Component } from 'react';
import className from 'classnames';
import styles from './Stakeholders.css';
import Tooltip from '../../../ui/Tooltip/Tooltip';

class StakeholderProfile extends Component {
  render() {
    const { stakeholders, type } = this.props;
    return stakeholders.valueSeq().map(stakeholder => {
      if (stakeholder.type === type) {
        if (stakeholder.highlighted) {
          return (
            <StakeholderProfileItem
              stakeholder={stakeholder}
              key={stakeholder.id}
            />
          );
        }
      }
    });
  }
}

class StakeholderProfileItem extends Component {
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
    const { stakeholder } = this.props;
    const profile = className(styles.profile, styles.oneThird);
    return (
      <div className={profile}>
        <img src="http://placehold.it/120x120" alt={stakeholder.name} />
        <h4 className={styles.title}>
          <span id={`Tooltip-${stakeholder.id}`} className={styles.name}>
            {stakeholder.name}
          </span>
          <Tooltip
            target={`Tooltip-${stakeholder.id}`}
            isOpen={this.state.tooltipOpen}
            toggle={this._handleTooltip}
          >
            {stakeholder.role}
          </Tooltip>
        </h4>
      </div>
    );
  }
}
export default StakeholderProfile;
