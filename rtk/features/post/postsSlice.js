// initial state

const { createSlice } = require("@reduxjs/toolkit");
const fatchPostThunk = require("./thunk/fetchPostThunk");

const initialState = {
  loading: false,
  post: {},
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fatchPostThunk.pending, (state, action) => {
      return {
        loading: true,
        error: "",
        post: {},
      };
    }),
      builder.addCase(fatchPostThunk.fulfilled, (state, action) => {
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      }),
      builder.addCase(fatchPostThunk.rejected, (state, action) => {
        return {
          loading: false,
          post: {},
          error: action.error.message,
        };
      });
  },
});

module.exports = postSlice.reducer;
module.exports.postSlice = postSlice;
