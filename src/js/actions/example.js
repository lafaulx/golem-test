export const EXAMPLE_SET_SCORE = 'EXAMPLE_SET_SCORE';

/*
 * action creators
 */
export const setScore = (score) => ({
  type: EXAMPLE_SET_SCORE,
  payload: score,
});
