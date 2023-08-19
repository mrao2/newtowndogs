import React from "react";
import { useParams } from "react-router-dom";
import EditComment from "./EditComment";
import "./CommentList.css";

const CommentList = ({ comments }) => {
  const { BlogId } = useParams();

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <h1>Comments</h1>
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
      </div>
    </div>
  );
};

export default CommentList;
