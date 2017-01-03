
import jsonQuery from 'json-query';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: {}, post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST: {
      const data = action.payload.data;
      const payload = jsonQuery(`entries[title=${action.title}]`, { data });
      return { ...state, post: payload };
    }
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
