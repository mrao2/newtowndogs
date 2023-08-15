import React, { useState } from "react";

const BlogImage = ({ BlogId, BlogTitle, showDeleteButton, ...props }) => {
  const [imgExists, setImgExists] = useState(true);

  const handleDeleteImage = () => {
    fetch("/images/" + BlogId, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting Image:", error);
      });
  };

  return (
    <div>
      <img
        src={`/images/${BlogId}`}
        alt={BlogTitle}
        style={{ display: imgExists ? undefined : "none" }}
        onError={() => setImgExists(false)}
        {...props}
      />
      <br></br>
      {showDeleteButton && imgExists ? (
        <button onClick={handleDeleteImage}>Delete Image</button>
      ) : null}
    </div>
  );
};

export default BlogImage;
