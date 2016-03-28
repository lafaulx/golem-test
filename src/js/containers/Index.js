import React, { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { connect } from 'react-redux';

import { create } from '../actions/golem';
import { setScore } from '../actions/example1';

import Example1 from '../components/Example1';

function Index({ dispatch, example1: score, golem: { images, isLoading } }) {
  return (
    <div>
      <h3>Index Page</h3>

      {isLoading &&
        <h4>Loading...</h4>
      }

      {!isLoading &&
        <div>
          <button onClick={function onIncrementClick() {
            const data = {
              html: renderToStaticMarkup(<Example1 score={score} />),
              width: 600,
              height: 315,
            };

            dispatch(create(data));
          }}
          >Create image</button>

          <h3>Uploaded images</h3>
          {images}
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

      <Example1 score={score} />
    </div>
  );
}

Index.propTypes = {
  golem: PropTypes.shape({
    images: PropTypes.array,
    isLoading: PropTypes.boolean,
  }),
  example1: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  golem: state.golem,
  example1: state.example1,
});

export default connect(mapStateToProps)(Index);
