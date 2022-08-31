const { createAsyncThunk } = require("@reduxjs/toolkit");
const generateQuerry = require("../../../../utils/generateQuerry");
const fetch = require("node-fetch");

const fetchRelatedPostThunk = createAsyncThunk(
  "relatedPosts/fetchPost",
  async (text) => {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${generateQuerry(text)}`
    );
    const posts = await request.json();
    return posts;
  }
);

module.exports = fetchRelatedPostThunk;
