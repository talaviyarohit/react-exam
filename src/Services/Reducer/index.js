
import { combineReducers } from 'redux';

import ProductReducer from './ProductReducer';
// import bookReducer from './BooksReducer'


 const rootreducer = combineReducers({ProductReducer});

export default rootreducer;