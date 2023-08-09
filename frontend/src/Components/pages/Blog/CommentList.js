import React from "react";
// import { Link } from "react-router-dom";
import "./CommentList.css";

const CommentList = ({ comments }) => {
  return (
    <div className="allClass">
      <div className="comment-container">
        <h1>Comments</h1>
        <ul className="comments-list">
          {" "}
          {comments.data.map((comment) => (
            <li>
              <div className="comment-main-level" key={comment.BlogId}>
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name by-author">
                      Written by {comment.Comment_Author}
                    </h6>
                  </div>
                  <div className="comment-content">{comment.Comment_Body}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentList;
