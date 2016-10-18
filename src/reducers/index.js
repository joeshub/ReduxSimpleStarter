import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

// any key in the returned reducer becomes a
// prop in the components that use it
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer 
})

export default rootReducer
