CREATE TABLE appointments (
	 appointment_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
     id INT,
     start_time VARCHAR(255) NOT NULL,
	 end_time VARCHAR(255),
	 start_date VARCHAR(255) NOT NULL,
	 end_date VARCHAR(255),	 
     description VARCHAR(255),
	 is_consultation TINYINT NOT NULL
);