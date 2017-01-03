import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://test_domain.com:4000/api/v1/pages.json';

const request = axios.get(`${ROOT_URL}`);

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(title) {
  return {
    type: FETCH_POST,
    payload: request,
    title
  };
}
