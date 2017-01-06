
import { FETCH_POSTS, FETCH_POST } from '../actions/index';
import jsonQuery from 'json-query';

const INITIAL_STATE = { all: {}, post: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      const data = action.payload.data.entries;
      console.log(data);
      const payload = [];
      //could use jsonQuery but that's overcomplicated...this is clearer
      //still be cool if we did use jsonQuery
      data.map((el) => {
        if (el.meta.type === 'post') {
          payload.push(el);
        }
      });
      return { ...state, all: payload };
    }
    case FETCH_POST: {
      console.log(action.title);
      console.log(action.type);
      console.log(action.data);
      const data = action.payload.data.entries;
      console.log(data);
      let payload;
      console.log(action.payload.data);

      data.map((el) => {
        if (el.title === action.title) {
          payload = el;
        }
      });
      return { ...state, post: payload };
    }

    default:
      return state;
  }
}
