import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import SiteInfoReducer from './reducer_site_info';
import DataReducer from './reducer_data.js';

const rootReducer = combineReducers({
  posts: PostsReducer,
  siteInfo: SiteInfoReducer,
  projects: DataReducer
});

export default rootReducer;
