import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import CommentList from "./CommentList";
import BlogImage from "./BlogImage";
import "./Blog.css";
import CreateBlog from "./CreateBlog";

const BlogDetails = () => {
  const { BlogId } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error } = useFetch(`/blogs/${BlogId}`);
  const { data: comments } = useFetch(`/comments/${BlogId}`);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="single-blog">
          <CreateBlog selectedBlog={blog} BlogId={BlogId} />
          {comments && <CommentList comments={comments} />}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
