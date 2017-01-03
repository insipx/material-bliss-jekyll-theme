import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import SiteInfoReducer from './reducer_site_info';

const rootReducer = combineReducers({
  posts: PostsReducer,
  siteInfo: SiteInfoReducer
});

export default rootReducer;
