
import jsonQuery from 'json-query';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: {}, post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST: {
      const data = action.payload.data;
      const payload = jsonQuery(`entries[title=${action.title}]`, { data }).value;
      return { ...state, post: payload };
    }
    case FETCH_POSTS: {
      const data = action.payload.data;
      const payload = [];
      //could use jsonQuery but that's overcomplicated...this is clearer
      //still be cool if we did use jsonQuery
      data.entries.forEach((el) => {
        if (el.meta.type === 'post') {
          payload.push(el);
        }
      });
      return { ...state, all: payload };
    }
    default:
      return state;
  }
}
