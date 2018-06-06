// we have to do it this way next middleware
// function is a middleware
export default store => next => action => (
  typeof action === 'function' ? action(store) : next(action)
);
