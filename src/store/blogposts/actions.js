// Action types
export const FETCH_BLOGPOSTS = "FETCH_BLOGPOSTS";

// Action Creator
// function that creates an action

export const fetchBlogPostsSuccess = (blogPosts) => {
  return {
    type: FETCH_BLOGPOSTS,
    payload: blogPosts,
  };
};
