import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import className from 'classnames';
import Card from '../../../ui/Card/Card';
import Progress from '../../../ui/Progress/Progress';
import Button from '../../../ui/Button/Button';
import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import SingleTruck from './SingleTruck';

import sustainabilityIcon from '../../../shared/media/images/icons/sustainability.png';
import activityIcon from '../../../shared/media/images/icons/activity.png';
import IncreaseIcon from '../../../shared/media/images/icons/increase.svg';
import DecreaseIcon from '../../../shared/media/images/icons/decrease.svg';

import styles from './Truck.css';

class Truck extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handletruckinfoModal = this._handletruckinfoModal.bind(this);
    this.state = {
      truckModal: false,
    };
  }

  _handletruckinfoModal() {
    this.setState({
      truckModal: !this.state.truckModal,
    });
  }

  render() {
    const { truck } = this.props;

    return (
      <Card title="Trucks" helpText="The data relevant to the trucks">
        <SingleTruck trucks={truck} total={3} />
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    truck: state.get('truck'),
  };
}

Truck.propTypes = {
  truck: PropTypes.node,
};

export default connect(mapStateToProps)(Truck);
