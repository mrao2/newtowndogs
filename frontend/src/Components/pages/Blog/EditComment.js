import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  Comment_Author: yup.string().max(255).required(),
  Comment_Body: yup.string().max(255).required(),
});

const EditComment = ({ comment, BlogId, create }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: comment,
  });

  const [isPendingUpdate, setIsPendingUpdate] = useState(false);
  const [isEditing, setIsEditing] = useState(create);

  const onSubmit = (data) => {
    setIsPendingUpdate(true);

    fetch(comment ? `/comments/${comment.CommentId}` : "/comments/", {
      method: comment ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        BlogId,
      }),
    })
      .then((res) => {
        setIsPendingUpdate(false);
        setIsEditing(false);
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
    <div className="list-item">
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* <span
              className={
                "w-48 avatar gd-warning" + Math.floor(Math.random() * 10)
              }
            >
              {comment?.Comment_Author?.slice(0, 1).toLocaleUpperCase()}
            </span> */}
          </div>
          <div className="flex">
            <label>Comment author:</label>
            <textarea {...register("Comment_Author")} />
            <div>{errors.Comment_Author?.message}</div>

            <label>Comment body:</label>
            <textarea {...register("Comment_Body")} />
            <div>{errors.Comment_Body?.message}</div>
          </div>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <button type="submit" disabled={isPendingUpdate}>
            {/* TODO: Clean up these conditionals, they're ugly */}
            {isPendingUpdate
              ? comment
                ? "Updating..."
                : "Creating..."
              : comment
              ? "Update"
              : "Create"}
          </button>
        </form>
      ) : comment ? (
        <>
          <div>
            <span
              className={
                "w-48 avatar gd-warning" + Math.floor(Math.random() * 10)
              }
            >
              {comment.Comment_Author?.slice(0, 1).toLocaleUpperCase()}
            </span>
          </div>
          <div className="flex">
            {comment.Comment_Author}
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
            onClick={() => setIsEditing(comment.CommentId)}
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
      ) : (
        <button
          className="flex"
          style={{ marginLeft: "auto", marginRight: "auto" }}
          onClick={() => setIsEditing(true)}
        >
          Create Comment
        </button>
      )}
    </div>
  );
};

export default EditComment;
