CREATE TABLE appointments (
	 id INT PRIMARY KEY AUTO_INCREMENT, 
	client_first_name VARCHAR(255),
	client_last_name VARCHAR(255),
	client_email VARCHAR(255),
	 client_phone_number INT,
	 start_time VARCHAR(255),
	end_time VARCHAR(255),
	 start_date VARCHAR(255),
	 end_date VARCHAR(255),	 
     description VARCHAR(255),
	 is_consultation TINYINT
);