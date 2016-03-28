import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  base: {
    display: 'block',
  },
};

function ImageLink({ img }) {
  return (
    <a style={[styles.base]} href={img} target="_blank">{img}</a>
  );
}

ImageLink.propTypes = {
  img: PropTypes.string.isRequired,
};

export default radium(ImageLink);
