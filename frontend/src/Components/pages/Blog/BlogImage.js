import React, {  useState } from "react";
import "./Blog.css"

const BlogImage = ({ BlogId, BlogTitle, showDeleteButton, ...props }) => {
  const [imgExists, setImgExists] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

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

  return imgExists ? (
    <>
      <img
        src={`/images/${BlogId}`}
        alt={BlogTitle}
        onError={() => setImgExists(false)}
        onLoad={() => setImgLoaded(true)}
        {...props}
        className={(props.className || '') + (imgExists && imgLoaded ? '' : ' hidden')}
      />
      {showDeleteButton && imgLoaded ? (
        <>
          <br></br>
          <button onClick={handleDeleteImage}>Delete Image</button>
        </>
      ) : null}
    </>
  ) : null;
};

export default BlogImage;
