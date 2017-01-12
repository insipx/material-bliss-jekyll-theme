import { resolve, reject } from 'redux-simple-promise';
import { FETCH_PROJECTS } from '../actions/index';

const INITIAL_STATE = { all: {} };


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case resolve(FETCH_PROJECTS): {
        const data = action.payload.data;
        return { ...state, all: data };
      }

      default:
        return state;
  }
}
