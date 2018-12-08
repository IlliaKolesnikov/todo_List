import { combineReducers } from 'redux';
import sign from './sign';
import projects from './projects';

const rootReducer = combineReducers({ sign, projects });

export default rootReducer;
