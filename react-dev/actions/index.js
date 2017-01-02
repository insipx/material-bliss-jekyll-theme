import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://test_domain.com:4000/api/v1/pages.json';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(title) {
  //We just get JSON back, so much parse it
  let request = axios.get('${ROOT_URL}');
  request = request.forEach((el) => {
    if (el.title === title) {
      return el;
    }
  });

  return {
    type: FETCH_POST,
    payload: request
  };
}
