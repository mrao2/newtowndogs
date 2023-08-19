import React from "react";
import { Link } from "react-router-dom";
import BlogImage from "./BlogImage";
import "./Blog.css";
import CreateBlog from "./CreateBlog";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.data.map((blog) => (
        <div className="blog-preview" key={blog.BlogId}>
          <Link to={`/blogs/${blog.BlogId}`}>
            <h2>{blog.Title}</h2>
            <BlogImage
              BlogId={blog.BlogId}
              BlogTitle={blog.Title}
              style={{ maxWidth: "100%" }}
              className=""
            />
            <p>Written by {blog.Author}</p>
          </Link>
        </div>
      ))}
      <CreateBlog />
    </div>
  );
};

export default BlogList;
