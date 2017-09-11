import {combineReducers} from 'redux';
import {stateReducers} from './stateReducer.jsx';

export default combineReducers({
    stateInfo: stateReducers
})