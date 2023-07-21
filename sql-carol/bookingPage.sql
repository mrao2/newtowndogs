CREATE TABLE appointments (
	 appointment_id INT PRIMARY KEY AUTO_INCREMENT, 
	 FOREIGN KEY (id) REFERENCES login_app(id), 
     start_time VARCHAR(255),
	 end_time VARCHAR(255),
	 start_date VARCHAR(255),
	 end_date VARCHAR(255),	 
     description VARCHAR(255),
	 is_consultation TINYINT
);