const fetchPostThunk = require("../../features/post/thunk/fetchPostThunk");
const fetchRelatedPostThunk = require("../../features/relatedPosts/thunk/fetchRelatedPostThunk");

const relatedPostsMiddleware = (store) => (next) => (action) => {
  if (action.type === fetchPostThunk.fulfilled.type) {
    const { title } = action.payload;
    console.log(title);
    store.dispatch(fetchRelatedPostThunk(title));
    return next(action);
  }
  return next(action);
};

module.exports = relatedPostsMiddleware;
