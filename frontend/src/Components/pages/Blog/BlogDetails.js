import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPendingUpdate, setIsPendingUpdate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Update state with blog data once it is fetched
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { title, body, author };

    setIsPendingUpdate(true);

    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then(() => {
        setIsPendingUpdate(false);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPendingUpdate(false);
      });
  };

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
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
        <article>
          {!isEditing && <h2>{blog.title}</h2>}
          {!isEditing && <p>Written by {blog.author}</p>}
          {!isEditing && <div>{blog.body}</div>}

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
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="mario">mario</option>
                <option value="luigi">luigi</option>
              </select>
              <button type="submit" disabled={isPendingUpdate}>
                {isPendingUpdate ? "Updating..." : "Update"}
              </button>
            </form>
            </div>
          )}

          {!isEditing && (
            <div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleClick}>Delete</button>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;