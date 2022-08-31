const fetchRelatedPostThunk = require("../../features/relatedPosts/thunk/fetchRelatedPostThunk");

const relatedPostsMiddleware = (store) => (next) => (action) => {
  if (action.type === "post/fetchPost/fulfilled") {
    const { title } = action.payload;

    store.dispatch(fetchRelatedPostThunk(title));
    return next(action);
  }
  return next(action);
};

module.exports = relatedPostsMiddleware;
