import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../../ui/Card/Card';
import Button from '../../../ui/Button/Button';

import Modal from '../../../ui/Modal/Modal';
import ModalHeader from '../../../ui/Modal/ModalHeader';
import ModalFooter from '../../../ui/Modal/ModalFooter';
import ModalBody from '../../../ui/Modal/ModalBody';
import Alert from '../../../ui/Alert/Alert';

import StakeholderProfile from './StakeholderProfile';
import styles from '../../../pages/SupplyChainPage/SupplyChainPage.css';
import StakeholderModalProfile from './StakeholderModalProfile';
import {
  fetchHighlightedStakeholdersIfNeeded,
} from '../../../entities/stakeholder/actions';
import RefreshImage from '../../../shared/media/images/icons/refresh.svg';
import Loading from '../../../ui/Loading/Loading';

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
    const {
      id,
      type,
      name,
      stakeholders,
      loading,
      status,
      statusText,
      receivedAt,
    } = this.props;

    const title = 'Highlighted Stakeholders for ' + name;
    return (
      <Card
        title={title}
        helpText="All the people involved in the Supply Chain area."
        id={id}
        type={type}
        date={receivedAt}
      >
        <div className={styles.row}>
          {loading ? <Loading /> : <div />}
          {status > 400 && !loading
            ? <Alert color="error">
                <p>
                  Error: {status}<br />Status Text: {statusText}
                </p>
              </Alert>
            : <div />}
          <StakeholderProfile stakeholders={stakeholders} type={type} />
        </div>
        <Button
          size="medium"
          color="primary"
          onClick={this._handleallstakeholderModal}
        >
          Know More
        </Button>
        {' '}
        <Modal
          isOpen={this.state.stakeholderModal}
          toggle={this._handleallstakeholderModal}
        >
          <ModalHeader toggle={this._handleallstakeholderModal}>
            Stakeholders for {name}
          </ModalHeader>
          <ModalBody>
            <StakeholderModalProfile name={name} type={type} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallstakeholderModal}>
              Close
            </Button>

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
    status: data.get('status'),
    statusText: data.get('statusText'),
    stakeholders: data.get('stakeholders'),
  };
}

Stakeholders.propTypes = {
  stakeholders: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Stakeholders);
