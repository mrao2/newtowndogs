import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import EditComment from "./EditComment";
import "./CommentList.css";

const CommentList = ({ comments }) => {
  const { BlogId } = useParams();

  // TODO: Remove this unneede state
  const [isCreating, setIsCreating] = useState(false);

  const createComment1 = useRef(null);
  const createComment2 = useRef(null);

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

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <h1>Comments</h1>
        {!isCreating && (
          <button ref={createComment2} onClick={handleCreateComment}>
            Create Comment
          </button>
        )}
        <div className="row">
          <div className="col-sm-6">
            <div className="list list-row block">
              {comments.data.map((comment) => (
                <EditComment
                  key={comment.CommentId}
                  comment={comment}
                  BlogId={BlogId}
                />
              ))}
            </div>
          </div>
        </div>
        {/* TODO: Add the Create Comment button to the bottom of the EditComment component */}
        <EditComment BlogId={BlogId} />
        {isCreating && <></>}
        <br ref={createComment1} />
      </div>
    </div>
  );
};

export default CommentList;
