import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import 'whatwg-fetch';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalFooter from '../../components/Modal/ModalFooter';
import ModalBody from '../../components/Modal/ModalBody';

import styles from '../../pages/SupplyChainPage/SupplyChainPage.css';

class Stakeholders extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallstakeholderModal = this._handleallstakeholderModal.bind(this);
    this.state = {
      stakeholderModal: false,
      stakeholders: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3004/stakeholders')
      .then((response) => {
        return response.json();
      }).then((json) => {
        console.log('parsed json', json);
      });
    }

  _handleallstakeholderModal() {
    this.setState({
      stakeholderModal: !this.state.stakeholderModal,
    });
  }

  render() {
    const profile = className(
      styles.profile, styles.oneThird
    );

    const modalprofileList = className(
      styles.row, styles.profilelist
    );

    const { id } = this.props;

    return (
      <Card title="Stakeholders" helpText="All the people involved in the Supply Chain area." id={id}>
        <div className={styles.row}>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
          <div className={profile}>
            <img src="http://placehold.it/150x150" alt="John Doe" />
            <h4>Raghu Nayyar</h4>
          </div>
        </div>
        <Button size="medium" color="primary" onClick={this._handleallstakeholderModal}>Know More</Button>
        <Modal isOpen={this.state.stakeholderModal} toggle={this._handleallstakeholderModal}>
          <ModalHeader toggle={this._handleallstakeholderModal}>Stakeholders for Intellegent Agent Level</ModalHeader>
          <ModalBody>
            <div className={modalprofileList}>
              <div className={styles.oneFifth}>
                <img className={styles.stakeholderphoto} src="http://placehold.it/100x100" />
              </div>
              <div className={styles.fourFifth}>
                <h5 className={styles.stakeholdername}>Raghu Nayyar</h5>
                <p className={styles.stakeholderemail}>hey@raghunayyar.com</p>
                <p className={styles.stakeholderphone}>+46 72 002 0360</p>
              </div>
            </div>
            <div className={modalprofileList}>
              <div className={styles.oneFifth}>
                <img className={styles.stakeholderphoto} src="http://placehold.it/100x100" />
              </div>
              <div className={styles.fourFifth}>
                <h5 className={styles.stakeholdername}>Raghu Nayyar</h5>
                <p className={styles.stakeholderemail}>hey@raghunayyar.com</p>
                <p className={styles.stakeholderphone}>+46 72 002 0360</p>
              </div>
            </div>
            <div className={modalprofileList}>
              <div className={styles.oneFifth}>
                <img className={styles.stakeholderphoto} src="http://placehold.it/100x100" />
              </div>
              <div className={styles.fourFifth}>
                <h5 className={styles.stakeholdername}>Raghu Nayyar</h5>
                <p className={styles.stakeholderemail}>hey@raghunayyar.com</p>
                <p className={styles.stakeholderphone}>+46 72 002 0360</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallstakeholderModal}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Stakeholders.propTypes = {
  id: PropTypes.string,
};

export default Stakeholders;
