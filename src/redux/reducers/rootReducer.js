import {combineReducers} from 'redux';
import {wordsReducer} from './wordsReducer';
import {filterModeReducer} from './filterModeReducer';
import {shouldShowFormReducer} from './shouldShowFormReducer';

export const rootReducer = combineReducers({
  words: wordsReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer
})