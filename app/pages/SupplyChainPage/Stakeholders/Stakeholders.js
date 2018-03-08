import React from 'react';

import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

class Notes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card title="Stakeholders" helpText="All the people involved in the Supply Chain area.">
        <div>
          <img src="http://placehold.it/150x150" alt="John Doe" />
          <h4>Raghu Nayyar</h4>
        </div>
        <div>
          <img src="http://placehold.it/150x150" alt="John Doe" />
          <h4>Raghu Nayyar</h4>
        </div>
        <div>
          <img src="http://placehold.it/150x150" alt="John Doe" />
          <h4>Raghu Nayyar</h4>
        </div>
        <Button size="medium" color="primary">View all</Button>
      </Card>
    );
  }
}

Notes.propTypes = {

};

export default Notes;
