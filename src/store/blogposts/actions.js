import axios from "axios";
import { baseUrl } from "../../config/vars";

// Action types
export const FETCH_BLOGPOSTS = "FETCH_BLOGPOSTS";

// Action Creator
// function that creates an action

export const fetchBlogPostsSuccess = (blogPosts) => {
  // Synchronous action
  // - object
  // - type
  // - optionally payload
  return {
    type: FETCH_BLOGPOSTS,
    payload: blogPosts,
  };
};

// A redux thunk (async action)
// - function
// - gets access to dispatch & getState
// - can use a promises / async functions
// - dispatch multiple actions as a flow
// - get current state of the store

export const fetchBlogposts = async (dispatch, getState) => {
  dispatch({ type: "APP_LOADING" });

  const response = await axios.get(`${baseUrl}/posts`);

  dispatch(fetchBlogPostsSuccess(response.data.rows));
  dispatch({ type: "APP_DONE_LOADING" });
};

// What we had before

// const fetchBlogposts = async () => {
//   const response = await axios.get(
//     "https://codaisseur-coders-network.herokuapp.com/posts"
//   );

//   dispatch(fetchBlogPostsSuccess(response.data.rows));
// };
