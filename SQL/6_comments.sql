CREATE TABLE comments (
  CommentId INT AUTO_INCREMENT PRIMARY KEY,
  BlogId INT,
  Author VARCHAR(255),
  Body VARCHAR(255),
  username VARCHAR (45),
   INDEX (username),
   INDEX (BlogId),
  FOREIGN KEY (username) REFERENCES login_app(username),
  FOREIGN KEY (BlogId) REFERENCES blogs(BlogId)
);