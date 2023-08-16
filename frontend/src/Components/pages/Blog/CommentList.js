import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import CreateComment from "./CreateComment";
import "./CommentList.css";
import { useParams } from "react-router-dom";

const CommentList = (comments) => {
  const [Comment_Author, setCommentAuthor] = useState("");
  const [Comment_Body, setCommentBody] = useState("");
  const [Comment_Date, setCommentDate] = useState(new Date());
  const { BlogId } = useParams();

  const [isPendingUpdate, setIsPendingUpdate] = useState(false);
  const [commentBeingEdited, setCommentBeingEdited] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const createComment1 = useRef(null);
  const createComment2 = useRef(null);

  useEffect(() => {
    const comment = comments.comments.data.find(
      (c) => c.CommentId === commentBeingEdited
    );
    if (comment) {
      const currentDate = new Date();
      setCommentAuthor(comment.Comment_Author);
      setCommentBody(comment.Comment_Body);
      setCommentDate(currentDate);
    }
  }, [comments, commentBeingEdited]);

  useEffect(() => {
    if (isCreating) {
      createComment1.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (!isCreating) {
      createComment2.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isCreating]);

  const handleCreateComment = () => {
    setIsCreating(!isCreating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedComment = { Comment_Body, Comment_Author, Comment_Date };

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
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <h1>Comments</h1>
        {!isCreating && (
          <button ref={createComment2} onClick={handleCreateComment}>
            {isCreating ? "Cancel" : "Create Comment"}
          </button>
        )}
        <div className="row">
          <div className="col-sm-6">
            <div className="list list-row block">
              {comments.comments.data.map((comment) => (
                <div className="list-item" key={comment.CommentId}>
                  {commentBeingEdited === comment.CommentId ? (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div>
                          {/* <a href="#" data-abc="true"> */}
                          <span className="w-48 avatar gd-warning">
                            {comment.Comment_Author?.slice(
                              0,
                              1
                            ).toLocaleUpperCase()}
                          </span>
                          {/* </a> */}
                        </div>
                        <div className="flex">
                          <label>Comment author:</label>
                          <textarea
                            required
                            value={Comment_Author}
                            onChange={(e) => setCommentAuthor(e.target.value)}
                          ></textarea>
                          <label>Comment body:</label>
                          <textarea
                            required
                            value={Comment_Body}
                            onChange={(e) => setCommentBody(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="no-wrap">
                          <div className="item-date text-muted text-sm d-none d-md-block">
                            {new Date(
                              comment.Comment_Date
                            ).toLocaleDateString()}
                          </div>
                        </div>
                        <button type="submit" disabled={isPendingUpdate}>
                          {isPendingUpdate ? "Updating..." : "Update"}
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div>
                        {/* <a href="#" data-abc="true"> */}
                        <span className={"w-48 avatar gd-warning"+(Math.floor(Math.random()*10))}>
                          {comment.Comment_Author?.slice(
                            0,
                            1
                          ).toLocaleUpperCase()}
                        </span>
                        {/* </a> */}
                      </div>
                      <div className="flex" >
                        {/* <a
                          href="#"
                          className="item-author text-color"
                          data-abc="true"
                        > */}
                        {comment.Comment_Author}
                        {/* </a> */}
                        <div className="item-except text-muted text-sm h-1x">
                          {comment.Comment_Body}
                        </div>
                      </div>
                      <div className="no-wrap">
                        <div className="item-date text-muted text-sm d-none d-md-block">
                          {new Date(comment.Comment_Date).toLocaleDateString()}
                        </div>
                      </div>
                      <button
                        className="comment-edit"
                        onClick={() => setCommentBeingEdited(comment.CommentId)}
                      >
                        <i className="bi bi-pen"></i>
                      </button>
                      <button
                        className="comment-delete"
                        onClick={() => handleDelete(comment.CommentId)}
                      >
                       <i className="bi bi-trash"></i>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {isCreating && <CreateComment BlogId={BlogId} />}
        {isCreating && (
          <button onClick={handleCreateComment}>
            {isCreating ? "Cancel" : "Create Comment"}
          </button>
        )}
        <br ref={createComment1} />
      </div>
    </div>
  );
};

export default CommentList;
