import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.data.map((blog) => (
        <div className="blog-preview" key={blog.BlogId}>
            <Link to={`/blogs/${blog.BlogId}`}>
            <h2>{blog.Title}</h2>
          <p>Written by {blog.Author}</p>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
