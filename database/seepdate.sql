INSERT INTO users (Name, Email, Login, Password, Rol, Address, Cell_phone) VALUES
('John Doe', 'john.doe@gmail.com', 'johndoe', 'password_123', 'Customer', '123 Main St',
3316746),
('Jane Smith', 'jane.smith@hotmail.com', 'janesmith', 'password_456*', 'Delivery', '456 Elm St',
8899067),
('Mike Johnson', 'mike.johnson@outlook.com', 'mikejohnson', 'p@ssword_789', 'Manager', '789
Oak St', 6789012);
Insertamos datos en la tabla customer
INSERT INTO customer (ID_Customer, ID_User, City) VALUES
(1, 1, 'New York');
Insertamos datos en la tabla delivery
INSERT INTO delivery (ID_Number, ID_User, ID_Delivery) VALUES
(1001, 2, 'D1001');
Insertamos datos en la tabla branch
INSERT INTO branch (Name_Store, Address, Cell_phone, ID_Customer) VALUES
('Store A', '111 First St', 4567890123, 1);
Insertamos datos en la tabla service
INSERT INTO service (Service_Code, Service_Date, Origin, Destination, Number_of_Packages,
Type_of_Transport, Description, City, ID_Customer, ID_Delivery) VALUES
(101, '2024-05-28', '123 Main St', '456 Elm St', 3, 'Car', 'Package delivery', 'New York', 1, 'D1001');
Insertamos datos en la tabla status
INSERT INTO status (Status_Date, Type_Status, ID_Service) VALUES
('2024-05-28', 'Picked Up', 1);
Insertamos datos en la tabla photo
INSERT INTO photo (URL_Images, Photo_Date, ID_Service) VALUES
('http://example.com/photo1.jpg', '2024-05-28', 1);
