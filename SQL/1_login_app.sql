-- run this first!
USE login_app;
CREATE TABLE `login_app` (
  id int AUTO_INCREMENT ,
  username varchar(45),
  hashed_password varchar(128),
  email varchar(100) DEFAULT NULL,
  firstname varchar(45),
  lastname varchar(45),
  phone BIGINT,
  UNIQUE KEY username_UNIQUE (username),
  UNIQUE KEY phone_UNIQUE (phone),
  PRIMARY KEY (id),
  INDEX (id),
  INDEX (first_name),
  INDEX (last_name),
  INDEX (email),
  INDEX (username)
);
