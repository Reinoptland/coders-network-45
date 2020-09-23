import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogPosts } from "../store/blogposts/selectors";
import {
  fetchBlogPostsSuccess,
  fetchBlogposts,
} from "../store/blogposts/actions";

export default function BlogpostsList() {
  const dispatch = useDispatch();
  const blogPosts = useSelector(selectBlogPosts);

  useEffect(() => {
    dispatch(fetchBlogposts);
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
