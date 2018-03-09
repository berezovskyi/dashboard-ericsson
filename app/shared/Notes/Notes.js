import React from 'react';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

class Notes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card title="Notes" helpText="Add Notes relevant to Supply Chain over here">
        <div>
          <h4>No Notes so far</h4>
        </div>
        <Button size="medium" color="primary">Add Note</Button>
      </Card>
    );
  }
}

Notes.propTypes = {

};

export default Notes;
