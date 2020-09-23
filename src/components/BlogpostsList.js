import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function BlogpostsList() {
  const dispatch = useDispatch();
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
  return <div>SHOW POSTS HERE PLEASE?</div>;
}
