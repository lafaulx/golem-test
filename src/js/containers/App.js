import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function App({ children }) {
  return (
    <div>
      <h1>Golem webapp example</h1>

      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

App.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  routing: state.routing,
});

export default connect(mapStateToProps)(App);
