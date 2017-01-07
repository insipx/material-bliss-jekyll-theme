import { resolve } from 'redux-simple-promise';
import { FETCH_SITE_INFO } from '../actions/index';

const INITIAL_STATE = { all: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(FETCH_SITE_INFO):
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
