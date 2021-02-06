import { combineReducers } from "redux";

import {episodeReducers} from "./EpisodeReducers";
import {authReducers} from "./AuthReducers";




const rootReducer = combineReducers({
  episode: episodeReducers,
  auth: authReducers
});



export default rootReducer
