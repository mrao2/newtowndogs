-- run this first!!!

CREATE TABLE `login_app` (
  id int AUTO_INCREMENT ,
  username varchar(45),
  hashed_password varchar(128),
  email varchar(100) DEFAULT NULL,
  first_name varchar(45),
  last_name varchar(45),
  phone int,
  UNIQUE KEY username_UNIQUE (username),
  UNIQUE KEY phone_UNIQUE (phone),
  PRIMARY KEY (id)
)