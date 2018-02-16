import React from 'react';
import Card from 'ui/Card/';

class SupplyChainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card>
          <div>
            Retailer 1 Capacity
          </div>
          <div>
            Warehouse Capacity
          </div>
          <div>
            Retailer 2 Capacity
          </div>
        </Card>
        <Card>
          <div>
            Stakeholders
          </div>
          <ul>
            <li>
              <img src="http://placehold.it/100x100" alt="John Doe" />
              <span>John Doe</span>
            </li>
            <li>
              <img src="http://placehold.it/100x100" alt="John Doe" />
              <span>John Doe</span>
            </li>
            <li>
              <img src="http://placehold.it/100x100" alt="John Doe" />
              <span>John Doe</span>
            </li>
            <li>
              <img src="http://placehold.it/100x100" alt="John Doe" />
              <span>John Doe</span>
            </li>
          </ul>
        </Card>
        <Card>
          <div>
            Notes
          </div>
          <p>This is a note</p>
        </Card>
        <Card>
          <h1>Truck 1</h1>
          <p>from supplier to warehouse</p>
          <div>
            <dl>
              <dt>Distance covered</dt>
              <dd>72%</dd>
              <dt>Sustainability</dt>
              <dd>76%</dd>
              <dt>Total Hours</dt>
              <dd>55 hours</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Time to reach warehouse</dt>
              <dd>21 hours</dd>
            </dl>
          </div>
        </Card>
        <Card>
          <p>Here comes the chart.</p>
        </Card>
      </div>
    );
  }
}

export default SupplyChainPage;
