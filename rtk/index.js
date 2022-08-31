const store = require("./app/store");
const fetchPostThunk = require("./features/post/thunk/fetchPostThunk");

store.subscribe(() => {});

store.dispatch(fetchPostThunk());
