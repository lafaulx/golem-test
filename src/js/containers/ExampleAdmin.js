import React, { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { connect } from 'react-redux';

import { create } from '../actions/photographer';
import { setScore } from '../actions/example';

import Wrapper from '../components/Wrapper';
import Example from '../components/Example';
import ImageLink from '../components/ImageLink';

function ExampleAdmin({ dispatch, example: score, photographer: { images, isLoading } }) {
  return (
    <div>
      <h3>Example 1 Admin Page</h3>

      {isLoading &&
        <h4>Loading...</h4>
      }

      {!isLoading &&
        <div>
          <button onClick={function onIncrementClick() {
            const data = {
              html: renderToStaticMarkup(<Wrapper><Example score={score} /></Wrapper>),
              width: 600,
              height: 315,
            };

            dispatch(create(data));
          }}
          >Create image</button>

          <h3>Uploaded images</h3>
          {images.map((img) => (<ImageLink img={img} />))}
        </div>
      }

      <div>
        <label>
          Score:
          <input onChange={function onScoreChange(e) {
            dispatch(setScore(e.target.value));
          }} value={score}
          />
        </label>
      </div>

      <Example score={score} />
    </div>
  );
}

ExampleAdmin.propTypes = {
  photographer: PropTypes.shape({
    images: PropTypes.array,
    isLoading: PropTypes.boolean,
  }),
  example: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photographer: state.photographer,
  example: state.example,
});

export default connect(mapStateToProps)(ExampleAdmin);
