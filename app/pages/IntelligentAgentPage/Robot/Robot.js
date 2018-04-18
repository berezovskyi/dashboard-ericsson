import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';
import SingleRobot from './SingleRobot';

class Robot extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handlerobotinfoModal = this._handlerobotinfoModal.bind(this);
    this.state = {
      robotModal: false,
    };
  }

  _handlerobotinfoModal() {
    this.setState({
      robotModal: !this.state.robotModal,
    });
  }

  render() {
    const { robot } = this.props;
    return (
      <Card title="Intelligent Agents" helpText="The data relevant to the robots">
        <SingleRobot robots={robot} />
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    robot: state.get('robot'),
  };
}

Robot.propTypes = {};

export default connect(mapStateToProps)(Robot);
