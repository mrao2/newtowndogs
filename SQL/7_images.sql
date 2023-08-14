CREATE TABLE images (
  ImageId INT AUTO_INCREMENT PRIMARY KEY,
  BlogId INT,
  Image LONGBLOB,
  username VARCHAR (45),
   INDEX (username),
   INDEX (BlogId),
  FOREIGN KEY (username) REFERENCES login_app(username),
  FOREIGN KEY (BlogId) REFERENCES blogs(BlogId) ON DELETE CASCADE
);