import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function BlogpostsList() {
  const dispatch = useDispatch();
  const blogPosts = useSelector((reduxState) => reduxState.blogPosts);
  console.log(blogPosts, "in component");
  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts"
      );

      console.log(response.data.rows);

      const action = {
        type: "FETCH_BLOGPOSTS",
        payload: response.data.rows,
      };

      dispatch(action);
    };

    fetchBlogposts();
  }, [dispatch]);
  return (
    <div>
      {blogPosts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
