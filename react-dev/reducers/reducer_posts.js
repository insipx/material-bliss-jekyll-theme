import { resolve, reject } from 'redux-simple-promise';
import { FETCH_POSTS, FETCH_POST, FETCH_PAGE } from '../actions/index';

const INITIAL_STATE = { all: {}, post: {}, page: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(FETCH_POSTS): {
      const data = action.payload.data.entries;
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

    case resolve(FETCH_POST): {
      const data = action.payload.data.entries;
      let payload;
      data.map((el) => {
        if (el.title === action.meta.title) {
          payload = el;
        }
      });
      return { ...state, post: payload };
    }
    case resolve(FETCH_PAGE): {
      const data = action.payload.data;
      return { ...state, page: data };
    }
    default:
      return state;
  }
}
