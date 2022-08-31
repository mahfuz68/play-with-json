const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const postSlice = require("../features/post/postsSlice");
const relatedPostsSlice = require("../features/relatedPosts/relatedPostSlice");
const logger = createLogger();
const relatedPostsMiddleware = require("./middleware/relatedPosts");

const store = configureStore({
  reducer: {
    post: postSlice,
    relatedPosts: relatedPostsSlice,
  },
  middleware: (gDF) => {
    return gDF().concat(logger, relatedPostsMiddleware);
  },
});

module.exports = store;
