import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BlogImage from "./BlogImage";
import "./Blog.css";
import CreateBlog from "./CreateBlog";

const BlogList = ({ blogs, title }) => {
  const createBlog = useRef(null);
  const cancelCreate = useRef(null);

  // useEffect(() => {
  //   if (isCreatingBlog) {
  //     createBlog.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   } else if (!isCreatingBlog) {
  //     cancelCreate.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  //   console.log(isCreatingBlog);
  // }, [isCreatingBlog]);

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
