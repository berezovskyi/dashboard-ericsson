import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import className from 'classnames';
import 'whatwg-fetch';

import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

import Modal from '../../../components/Modal/Modal';
import ModalHeader from '../../../components/Modal/ModalHeader';
import ModalFooter from '../../../components/Modal/ModalFooter';
import ModalBody from '../../../components/Modal/ModalBody';

import StakeholderProfile from './StakeholderProfile';
import styles from '../../../pages/SupplyChainPage/SupplyChainPage.css';
import StakeholderModalProfile from './StakeholderModalProfile';

class Stakeholders extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallstakeholderModal = this._handleallstakeholderModal.bind(
      this,
    );
    this.state = {
      stakeholderModal: false,
      stakeholders: [],
    };
  }

  componentWillMount() {
    const { type, stakeholders } = this.props;
    const filteredstakeholders = stakeholders.filter(stakeholder => type === stakeholder.type);
    this.setState({
      stakeholders: filteredstakeholders,
    });
  }

  _handleallstakeholderModal() {
    this.setState({
      stakeholderModal: !this.state.stakeholderModal,
    });
  }

  render() {
    const { id, type } = this.props;
    const { stakeholders } = this.state;

    return (
      <Card
        title="Stakeholders"
        helpText="All the people involved in the Supply Chain area."
        id={id}
        type={type}
      >
        <div className={styles.row}>
          <StakeholderProfile stakeholders={stakeholders} />
        </div>
        <Button
          size="medium"
          color="primary"
          onClick={this._handleallstakeholderModal}
        >
          Know More
        </Button>
        <Modal
          isOpen={this.state.stakeholderModal}
          toggle={this._handleallstakeholderModal}
        >
          <ModalHeader toggle={this._handleallstakeholderModal}>
            Stakeholders for Intellegent Agent Level
          </ModalHeader>
          <ModalBody>
            <StakeholderModalProfile stakeholders={stakeholders} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallstakeholderModal}>
              Close
            </Button>
            {' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    stakeholders: state.get('stakeholders'),
  };
}

Stakeholders.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Stakeholders);
