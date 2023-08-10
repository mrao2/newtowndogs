CREATE TABLE blogs (
  BlogId INT AUTO_INCREMENT PRIMARY KEY,
  Author VARCHAR(255),
  Title VARCHAR(255),
  Body VARCHAR(40000),
  Likes VARCHAR(255),
  Category VARCHAR(255),
  Comments VARCHAR(255),
  username VARCHAR (45),
   INDEX (username),
  FOREIGN KEY (username) REFERENCES login_app(username)
);