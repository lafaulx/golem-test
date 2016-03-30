import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  parent: {
    base: {
      boxSizing: 'border-box',
      width: '600px',
      height: '315px',
      backgroundImage: 'url("https://r.bstatic.com/data/xphoto/720x405/376/3766864.jpg")',
      backgroundSize: 'cover',
      position: 'relative',
      padding: '30px 170px 30px 30px',
    },
  },
  text: {
    base: {
      display: 'inline',
      fontSize: '40px',
      lineHeight: '46px',
      backgroundColor: 'white',
      fontFamily: 'Helvetica Neue',
      boxShadow: '10px 0 0 white, -10px 0 0 white',
    },
  },
  header: {
    base: {
      fontSize: '50px',
      fontFamily: 'Helvetica Neue',
      textAlign: 'center',
      margin: '0',
      position: 'absolute',
      top: '30px',
      right: '30px',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '50%',
    },
  },
};

function Example({ score, text }) {
  return (
    <div style={[styles.parent.base]}>
      <p style={[styles.text.base]}>{text}</p>
      <h3 style={[styles.header.base]}>{score}</h3>
    </div>
  );
}

Example.propTypes = {
  score: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default radium(Example);
