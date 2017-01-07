import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_PAGE = 'FETCH_PAGE';
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
    payload: {
      promise: postsRequest
    }
  };
}

export function fetchPost(title) {
  return {
    type: FETCH_POST,
    payload: {
      promise: postsRequest,
      title
    }
  };
}


export function fetchPage(title, url) {
    const request = axios.get(`${ROOT_URL}${url}${title}.json`);
    return {
      type: FETCH_PAGE,
      payload: {
        promise: request
      }
    };
}

export function fetchSiteInfo() {
  return {
    type: FETCH_SITE_INFO,
    payload: {
      promise: siteInfoRequest
    }
  };
}
