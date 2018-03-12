import React from 'react';
import className from 'classnames';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import Modal from '../../components/Modal/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalFooter from '../../components/Modal/ModalFooter';
import ModalBody from '../../components/Modal/ModalBody';

import styles from '../../pages/SupplyChainPage/SupplyChainPage.css';

class Notes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleallstakeholderModal = this._handleallstakeholderModal.bind(this);
    this.state = {
      stakeholderModal: false,
    };
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
    return (
      <Card title="Stakeholders" helpText="All the people involved in the Supply Chain area.">
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
        <Button size="medium" color="primary" onClick={this._handleallstakeholderModal}>View all</Button>
        <Modal isOpen={this.state.stakeholderModal} toggle={this._handleallstakeholderModal}>
          <ModalHeader toggle={this._handleallstakeholderModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._handleallstakeholderModal}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

Notes.propTypes = {

};

export default Notes;
