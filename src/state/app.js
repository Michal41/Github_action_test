import { handleActions, createAction } from 'redux-actions';

const initialState = {
  isDarkMode: false,
};


export const TOGGLE_DARKMODE = createAction('TOGGLE_DARKMODE');

const Reducer = handleActions({
  [TOGGLE_DARKMODE]: (state, { payload }) => {
    return { ...state, isDarkMode: !state.isDarkMode };
  },
}, initialState);

export default Reducer;