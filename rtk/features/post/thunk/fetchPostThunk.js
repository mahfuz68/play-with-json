const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const fetchPostThunk = createAsyncThunk("post/fetchPost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/69");
  const post = await response.json();
  return post;
});

module.exports = fetchPostThunk;
