import React, { useState } from "react";

const CreateComment = ({ BlogId }) => {
  const [Comment_Author, setCommentAuthor] = useState("");
  const [Comment_Body, setCommentBody] = useState("");
  const [Comment_Date] = useState(
    new Date().toISOString().slice(0, 19).replace("T", " ")
  );

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      Comment_Author,
      Comment_Body,
      Comment_Date,
      BlogId,
    };

    setIsPending(true);

    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    }).then(() => {
      setIsPending(false);
      window.location.reload();
    });
  };

  return (
    <div className="create">
      <h2>Add a New Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Comment Body:</label>
        <textarea
          required
          value={Comment_Body}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <label>Comment Author:</label>
        <textarea
          required
          value={Comment_Author}
          onChange={(e) => setCommentAuthor(e.target.value)}
        />
        {!isPending && <button>Add Comment</button>}
        {isPending && <button disabled>Adding Comment...</button>}
      </form>
    </div>
  );
};
export default CreateComment;
