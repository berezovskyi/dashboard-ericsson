import React from 'react';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

export default class MainLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section>
        <Sidebar />
        <Footer />
      </section>

    );
  }
}
