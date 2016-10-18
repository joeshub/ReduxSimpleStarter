export function selectBook (book) {
  // console.log('a book has been selected: ', book.title)
  // selectBook is an action creator
  // it returns an object with a type property = an action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
