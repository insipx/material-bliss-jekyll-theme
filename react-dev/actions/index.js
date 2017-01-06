import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SITE_INFO = 'FETCH_SITE_INFO';

const ROOT_URL = 'http://test_domain.com:4000';
const POSTS = '/api/v1/pages.json';
const SITE_INFO = '/api/v1/config.json';

const postsRequest = axios.get(`${ROOT_URL}${POSTS}`);
const siteInfoRequest = axios.get(`${ROOT_URL}${SITE_INFO}`);

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: postsRequest
  };
}

export function fetchPost(title) {
  return {
    type: FETCH_POST,
    payload: postsRequest,
    title: title
  };
}

export function fetchSiteInfo() {
  return {
    type: FETCH_SITE_INFO,
    payload: siteInfoRequest
  };
}
