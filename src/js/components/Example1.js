import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  parent: {
    base: {
      width: '1200px',
      height: '630px',
      backgroundImage: 'url("http://q-ec.bstatic.com/data/xphoto/1872x1404/331/3318769.jpg")',
    },
  },
  header: {
    base: {
      fontSize: '70px',
      textAlign: 'center',
      lineHeight: '630px',
      margin: '0',
    },
  },
};

function Example1({ score }) {
  return (
    <div style={[styles.parent.base]}>
      <h3 style={[styles.header.base]}>Average review score: {score}</h3>
    </div>
  );
}

Example1.propTypes = {
  score: PropTypes.string.isRequired,
};

export default radium(Example1);
