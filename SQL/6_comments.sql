CREATE TABLE comments (
  CommentId INT AUTO_INCREMENT PRIMARY KEY,
  BlogId INT,
  Comment_Author VARCHAR(255),
  Comment_Body VARCHAR(255),
  username VARCHAR (45),
  Comment_Date DATETIME,
   INDEX (username),
   INDEX (BlogId),
  FOREIGN KEY (username) REFERENCES login_app(username),
  FOREIGN KEY (BlogId) REFERENCES blogs(BlogId) ON DELETE CASCADE
);