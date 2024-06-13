CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Ejemplo de inserción de usuarios con contraseñas cifradas usando pgcrypto
INSERT INTO users (Name, Email, Login, Password, Rol, Address, Cell_phone) VALUES
('John Doe', 'john@gmail.com', 'johndoe10', crypt('123456', gen_salt('bf')), 'Customer', '123 Maple Street', 1234567890),
('Jane Smith', 'jane@gmail.com', 'janesmith10', crypt('123456', gen_salt('bf')), 'Delivery', '456 Oak Street', 9876543210),
('Administrador', 'admin@admin.com', 'admin', crypt('admin123456', gen_salt('bf')), 'Manager', '789 Pine Street', 1122334455);

-- Inserting data into customer table
INSERT INTO customer (ID_Customer, ID_User, City) VALUES
(1, 1, 'New York'),
(2, 3, 'Los Angeles'),
(3, 1, 'Chicago');

-- Inserting data into delivery table
INSERT INTO delivery (ID_Number, ID_User, ID_Delivery) VALUES
(1, 2, 'DEL123'),
(2, 2, 'DEL456'),
(3, 2, 'DEL789');

-- Inserting data into branch table
INSERT INTO branch (Name_Store, Address, Cell_phone, ID_Customer) VALUES
('Store 1', '111 First Street', 1231231234, 1),
('Store 2', '222 Second Street', 4564564567, 2),
('Store 3', '333 Third Street', 7897897890, 3);

-- Inserting data into service table
INSERT INTO service (Service_Code, Date, Origin, Destination, Number_of_Packages, Type_of_Transport, Description, City, ID_Customer, ID_Delivery) VALUES
(DEFAULT, '2023-01-01', 'Origin 1', 'Destination 1', 10, 'Car', 'Description 1', 'City 1', 1, 'DEL123'),
(DEFAULT, '2023-02-01', 'Origin 2', 'Destination 2', 20, 'Motorcycle', 'Description 2', 'City 2', 2, 'DEL456'),
(DEFAULT, '2023-03-01', 'Origin 3', 'Destination 3', 30, 'Truck', 'Description 3', 'City 3', 3, 'DEL789');

-- Inserting data into status table
INSERT INTO status (Date, Type_Status, ID_Service) VALUES
('2023-01-02', 'Delivered', 1),
('2023-02-02', 'Pickedup', 2),
('2023-03-02', 'Required', 3);

-- Inserting data into photos table
INSERT INTO photos (URL_Images, Date, ID_Service) VALUES
('http://example.com/photo1.jpg', '2023-01-03', 1),
('http://example.com/photo2.jpg', '2023-02-03', 2),
('http://example.com/photo3.jpg', '2023-03-03', 3);

