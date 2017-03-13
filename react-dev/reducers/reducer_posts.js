import fuzzy from 'fuzzy';
import { resolve } from 'redux-simple-promise';
import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_PAGE,
  FETCH_POSTS_CATEGORY,
  FETCH_POSTS_TAG
 } from '../actions/index';

const INITIAL_STATE = { all: {}, post: {}, page: {}, category: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(FETCH_POSTS): {
      const data = action.payload.data.entries;
      const payload = [];

      if (typeof action.meta.term !== 'undefined' && action.meta.term.length >= 1) {
        const options = {
          pre: '',
          post: '',
          extract(el) {
            return `${el.title} ${el.tags.map((tag) => `${tag} `)} `;
          }
        };
        const results = fuzzy.filter(action.meta.term, data, options);
        results.map((el) => {
          if (el.score > 6) {
            payload.push(el.original);
          }
        });
        return { ...state, all: payload };
      }

      data.map((el) => {
        if (el.meta.type === 'post') {
          payload.push(el);
        }
      });
      return { ...state, all: payload };
    }

    case resolve(FETCH_POSTS_CATEGORY): {
      const data = action.payload.data.entries;
      const payload = [];
      data.map((el) => {
        if (el.meta.categories.includes(action.meta.category)) {
          payload.push(el);
        }
      });
      return { ...state, category: payload };
    }
    case resolve(FETCH_POSTS_TAG): {
      const data = action.payload.data.entries;
      const payload = [];
      data.map((el) => {
        if (el.tags.includes(action.meta.tag)) {
          payload.push(el);
        }
      });
      return { ...state, category: payload };
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
