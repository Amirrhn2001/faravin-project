import { combineReducers } from 'redux';
import settingReducer from "./setting";
const rootReducer = combineReducers({ 
  setting: settingReducer
}) 

export type State = ReturnType<typeof rootReducer>;