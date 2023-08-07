import React from "react";
import BlogList from "./BlogList";
import useFetch from "../../useFetch";
import './Blog.css';

const BlogHome = () => {

const {data: blogs, isPending, error} = useFetch('/api/data')


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default BlogHome;
