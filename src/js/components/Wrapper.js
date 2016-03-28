import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  body: {
    base: {
      margin: '0',
    },
  },
};

function Wrapper({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
      </head>
      <body style={[styles.body.base]}>
        {children}
      </body>
    </html>
  );
}

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default radium(Wrapper);
