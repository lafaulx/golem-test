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

      {images}

      {isLoading &&
        <h4>Loading...</h4>
      }

      {!isLoading &&
        <button onClick={function onIncrementClick() {
          const data = {
            html: renderToStaticMarkup(<Example1 score={score} />),
            width: 1200,
            height: 630,
          };

          dispatch(create(data));
        }}
        >Create image</button>
      }

      <label>
        Score:
        <input onKeyUp={function onScoreChange(e) {
          dispatch(setScore(e.currentTarget.value));
        }} value={score}
        />
      </label>

      <Example1 score={'9.3'} />
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
