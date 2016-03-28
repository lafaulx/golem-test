import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  parent: {
    base: {
      width: '600px',
      height: '315px',
      backgroundImage: 'url("http://q-ec.bstatic.com/data/xphoto/1872x1404/331/3318769.jpg")',
      backgroundSize: 'cover',
      position: 'relative',
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

function Example1({ score }) {
  return (
    <div style={[styles.parent.base]}>
      <h3 style={[styles.header.base]}>{score}</h3>
    </div>
  );
}

Example1.propTypes = {
  score: PropTypes.string.isRequired,
};

export default radium(Example1);
