// state arg is not application state, but
// only the state this reducer is responsible for
// default to null so you have it on app startup
// but if you try to read on load this.props.foo.bar will be null
// so we try to fix in the render method to avoid hitting null
export default function (state = null, action) {
  switch (action.type) {

  case 'BOOK_SELECTED':
    return action.payload
  }

  return state
}
