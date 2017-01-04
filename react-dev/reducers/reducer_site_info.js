import jsonQuery from 'json-query';
import { FETCH_SITE_INFO } from '../actions/index';

const INITIAL_STATE = { all: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SITE_INFO:
      console.log(action.payload.data);
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
