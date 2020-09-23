import Axios from "axios";
import React, { useEffect } from "react";
import axios from "axios";

export default function BlogpostsList() {
  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts"
      );

      console.log(response.data.rows);
    };

    fetchBlogposts();
  }, []);
  return <div>SHOW POSTS HERE PLEASE?</div>;
}
