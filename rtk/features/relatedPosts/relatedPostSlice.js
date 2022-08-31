const { createSlice } = require("@reduxjs/toolkit");
const fetchRelatedPostThunk = require("./thunk/fetchRelatedPostThunk");

// initial state

const initialState = {
  loading: false,
  relatedPost: [],
  error: "",
};

const relatedPostsSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPostThunk.pending, (state, action) => {
        return {
          loading: true,
          error: "",
        };
      })
      .addCase(fetchRelatedPostThunk.fulfilled, (state, action) => {
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      })
      .addCase(fetchRelatedPostThunk.rejected, (state, action) => {
        return {
          loading: false,
          post: [],
          error: action.payload.error.message,
        };
      });
  },
});

module.exports = relatedPostsSlice.reducer;
module.exports.relatedPostsSlice = relatedPostsSlice;
