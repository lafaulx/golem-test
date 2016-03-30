import React, { PropTypes } from 'react';
import radium from 'radium';

function Wrapper({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default radium(Wrapper);
