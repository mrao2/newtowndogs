import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./Blog.css";
import BlogImage from "./BlogImage";

const schema = yup.object({
  Title: yup.string().max(255).required(),
  Body: yup.string().required(),
  Author: yup.string().required(),
  Image_Data: yup.mixed(),
});

const CreateBlog = ({ selectedBlog, BlogId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: selectedBlog?.data?.[0],
  });

  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    const { Image_Data: image, ...blog } = data;
    console.log(data);
    setIsPending(true);

    fetch(selectedBlog ? `/blogs/${BlogId}` : "/blogs/", {
      method: selectedBlog ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: blog.Title,
        Author: blog.Author,
        Body: blog.Body,
      }),
    }).then(async (res) => {
      const blogData = await res.json();
      console.log(image);
      if (image instanceof FileList && (blogData?.data?.insertId || BlogId)) {
        const imageData = new FormData();
        imageData.append("BlogId", blogData?.data?.insertId || BlogId);
        imageData.append("image", image[0]);
        await fetch(selectedBlog ? `/images/${BlogId}` : "/images", {
          method: selectedBlog ? "PUT" : "POST",
          body: imageData,
        });
      }

      setIsPending(false);
      if (blogData?.data?.insertId) {
        history.push(`/blogs/${blogData.data.insertId}`);
      } else {
        window.location.reload();
      }
    });
  };
  const handleDeleteBlog = () => {
    fetch("/blogs/" + BlogId, {
      method: "DELETE",
    })
      .then(() => {
        history.push("/BlogHome");
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div className="create">
      {isEditing ? (
        <>
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Blog Title:</label>
            <input type="text" {...register("Title")} />
            <div>{errors.Title?.message}</div>

            <label>Blog body:</label>
            <textarea {...register("Body")} />
            <div>{errors.Body?.message}</div>

            <label>Blog Author:</label>
            <textarea {...register("Author")} />
            <div>{errors.Author?.message}</div>

            <label>Blog Image:</label>
            <input type="file" accept="image/*" {...register("Image_Data")} />

            <button onClick={() => setIsEditing(false)}>Cancel</button>
            {!isPending && (
              <button type="subsetIsEditingmit">
                {selectedBlog ? "Edit Blog" : "Add Blog"}
              </button>
            )}
            {isPending && (
              <button disabled>
                {selectedBlog ? "Editing Blog..." : "Adding Blog..."}
              </button>
            )}
          </form>
        </>
      ) : selectedBlog ? (
        <>
          <h2>{selectedBlog?.data[0].Title}</h2>
          <div>
            <BlogImage
              BlogId={BlogId}
              BlogTitle={selectedBlog.Title}
              showDeleteButton={true}
              style={{ maxWidth: "100%" }}
              className=""
            />
          </div>
          <p>Written by {selectedBlog.data[0].Author}</p>
          <div>{selectedBlog.data[0].Body}</div>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit Blog</button>
            <button onClick={handleDeleteBlog}>Delete Blog</button>
          </div>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>Create Blog</button>
      )}
    </div>
  );
};

export default CreateBlog;
