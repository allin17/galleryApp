import { createStore, combineReducers, applyMiddleware } from 'redux';
import galleryReducer from './galleryReducer';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  galleryReducer: galleryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;