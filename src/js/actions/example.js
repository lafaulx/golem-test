export const EXAMPLE_SET_SCORE = 'EXAMPLE_SET_SCORE';
export const EXAMPLE_SET_TEXT = 'EXAMPLE_SET_TEXT';

/*
 * action creators
 */
export const setScore = (score) => ({
  type: EXAMPLE_SET_SCORE,
  payload: score,
});

export const setText = (text) => ({
  type: EXAMPLE_SET_TEXT,
  payload: text,
});
