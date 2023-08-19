import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./Blog.css";
import CommentList from "./CommentList";
import BlogImage from "./BlogImage";

const BlogDetails = () => {
  const { BlogId } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error } = useFetch(`/blogs/${BlogId}`);
  const { data: comments } = useFetch(`/comments/${BlogId}`);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const [isPendingUpdate, setIsPendingUpdate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Update state with blog data once it is fetched
  useEffect(() => {
    if (blog) {
      setTitle(blog.data[0].Title);
      setBody(blog.data[0].Body);
      setAuthor(blog.data[0].Author);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = { title, body, author };

    setIsPendingUpdate(true);

    fetch("/blogs/" + BlogId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then(async () => {
        if (image instanceof File) {
          const imageData = new FormData();
          imageData.append("BlogId", BlogId);
          imageData.append("image", image);
          await fetch("/images/" + BlogId, {
            method: "PUT",
            body: imageData,
          });
        }
        setIsPendingUpdate(false);
        setIsEditing(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPendingUpdate(false);
      });
  };

  const handleDeleteBlog = () => {
    fetch("/blogs/" + BlogId, {
      method: "DELETE",
    })
      .then(() => {
        history.push("/BlogHome");
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="single-blog">
          {!isEditing && <h2>{blog.data[0].Title}</h2>}
          {!isEditing && (
            <div>
              <BlogImage
                BlogId={BlogId}
                BlogTitle={title}
                showDeleteButton={true}
                style={{ maxWidth: "100%" }}
                className=""
              />
            </div>
          )}
          {!isEditing && <p>Written by {blog.data[0].Author}</p>}
          {!isEditing && <div>{blog.data[0].Body}</div>}

          {isEditing && (
            <div className="create">
              <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <textarea
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
                <label>Blog Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit" disabled={isPendingUpdate}>
                  {isPendingUpdate ? "Updating..." : "Update"}
                </button>
              </form>
            </div>
          )}

          {!isEditing && (
            <div>
              <button onClick={() => setIsEditing(true)}>Edit Blog</button>
              <button onClick={handleDeleteBlog}>Delete Blog</button>
            </div>
          )}
          {comments && <CommentList comments={comments} />}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
