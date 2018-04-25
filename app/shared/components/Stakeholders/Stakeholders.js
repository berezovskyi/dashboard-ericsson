import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';

import StakeholderProfile from './StakeholderProfile';
import styles from '../../../pages/SupplyChainPage/SupplyChainPage.css';
import StakeholderModalProfile from './StakeholderModalProfile';
import { fetchHighlightedStakeholdersIfNeeded } from './actions';

class Stakeholders extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallstakeholderModal = this._handleallstakeholderModal.bind(
      this,
    );
    this.state = {
      stakeholderModal: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHighlightedStakeholdersIfNeeded());
  }

  _handleallstakeholderModal() {
    this.setState({
      stakeholderModal: !this.state.stakeholderModal,
    });
  }

  render() {
    const { id, type, name, stakeholders } = this.props;
    const title = 'Highlighted Stakeholders for ' + name;
    return (
      <Card
        title={title}
        helpText="All the people involved in the Supply Chain area."
        id={id}
        type={type}
      >
        <div className={styles.row}>
          <StakeholderProfile stakeholders={stakeholders} type={type} />
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
            Stakeholders for {name}
          </ModalHeader>
          <ModalBody>
            <StakeholderModalProfile
              name={name}
              type={type}
            />
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
  const data = state.get('stakeholders');
  return {
    loading: data.get('loading'),
    receivedAt: data.get('receivedAt'),
    stakeholders: data.get('stakeholders'),
  };
}

Stakeholders.propTypes = {
  stakeholders: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Stakeholders);
