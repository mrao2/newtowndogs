CREATE DATABASE `blogs` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE `blogs` (
  `BlogId` int DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Body` varchar(255) DEFAULT NULL,
  `Likes` varchar(255) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Comments` varchar(255) DEFAULT NULL
);