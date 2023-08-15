import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CreateComment from "./CreateComment";
import "./CommentList.css";
import { useParams } from "react-router-dom";

const CommentList = (comments) => {
  const [Comment_Author, setCommentAuthor] = useState("");
  const [Comment_Body, setCommentBody] = useState("");
  const { BlogId } = useParams();

  const [isPendingUpdate, setIsPendingUpdate] = useState(false);
  const [commentBeingEdited, setCommentBeingEdited] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const comment = comments.comments.data.find(
      (c) => c.CommentId === commentBeingEdited
    );
    if (comment) {
      setCommentAuthor(comment.Comment_Author);
      setCommentBody(comment.Comment_Body);
    }
  }, [comments, commentBeingEdited]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedComment = { Comment_Body, Comment_Author };

    setIsPendingUpdate(true);

    fetch("/comments/" + commentBeingEdited, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedComment),
    })
      .then((res) => {
        setIsPendingUpdate(false);
        setCommentBeingEdited(null);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPendingUpdate(false);
      });
  };
  const handleDelete = (commentId) => {
    fetch("/comments/" + commentId, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div className="allClass">
      <div className="comment-container">
        <h1>Comments</h1>
        <ul className="comments-list">
          {" "}
          {comments.comments.data.map((comment) => (
            <li key={comment.CommentId}>
              {commentBeingEdited === comment.CommentId ? (
                <div className="create">
                  <form onSubmit={handleSubmit}>
                    <label>Comment body:</label>
                    <textarea
                      required
                      value={Comment_Body}
                      onChange={(e) => setCommentBody(e.target.value)}
                    ></textarea>
                    <label>Comment author:</label>
                    <textarea
                      required
                      value={Comment_Author}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                    ></textarea>
                    <button type="submit" disabled={isPendingUpdate}>
                      {isPendingUpdate ? "Updating..." : "Update"}
                    </button>
                  </form>
                </div>
              ) : (
                <>
                  <div className="comment-main-level">
                    <div className="comment-box" key={comment.CommentId}>
                      <div className="comment-head">
                        <h6 className="comment-name by-author">
                          Written by {comment.Comment_Author}
                        </h6>
                      </div>
                      <div className="comment-content">
                        {comment.Comment_Body}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setCommentBeingEdited(comment.CommentId)}
                    >
                      Edit Comment
                    </button>
                    <button onClick={() => handleDelete(comment.CommentId)}>
                      Delete Comment
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <button onClick={() => setIsCreating(true)}>Create Comment</button>
        {isCreating && <CreateComment BlogId={BlogId} />}
      </div>
    </div>
  );
};

export default CommentList;
