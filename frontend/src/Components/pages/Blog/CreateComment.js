import React, { useState } from "react";

const CreateComment = ({BlogId}) => {
    const[comment_Author, setCommentAuthor] = useState("")
    const[Comment_Body, setCommentBody] = useState("")

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = { comment_Author, Comment_Body, BlogId };
    
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

      return(
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
            value={comment_Author}
            onChange={(e) => setCommentAuthor(e.target.value)}
          />
          {!isPending && <button>Add Comment</button>}
          {isPending && <button disabled>Adding Comment...</button>}
        </form>
      </div>
    );
}
export default CreateComment;