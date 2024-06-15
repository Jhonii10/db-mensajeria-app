CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Example of inserting users with encrypted passwords using pgcrypto
INSERT INTO users (Name, Email, Login, Password, Rol, Address, Cell_phone) VALUES
('Administrador', 'admin@admin.com', 'admin', crypt('admin123456', gen_salt('bf')), 'Manager', '789 Pine Street', 3122334455),
('John Doe', 'john@gmail.com', 'johndoe10', crypt('123456', gen_salt('bf')), 'Customer', '123 Maple Street', 3234567890),
('Jane Smith', 'jane@gmail.com', 'janesmith10', crypt('123456', gen_salt('bf')), 'Delivery', '456 Oak Street', 3876543210),
('Alice Brown', 'alice@gmail.com', 'alicebrown10', crypt('alice123', gen_salt('bf')), 'Customer', '101 Elm Street', 3233445566),
('Bob Johnson', 'bob@gmail.com', 'bobjohnson10', crypt('bob123', gen_salt('bf')), 'Delivery', '202 Cedar Street', 3344556677),
('Charlie Green', 'charlie@gmail.com', 'charliegreen10', crypt('charlie123', gen_salt('bf')), 'Customer', '303 Birch Street', 3455667788);

-- Inserting data into customer table
INSERT INTO customer (ID_Customer, ID_User, City) VALUES
(11123422, 2, 'Cali'),
(22345533, 4, 'Bogota'),
(32223324, 6, 'Medellin');

-- Inserting data into delivery table
INSERT INTO delivery (ID_Delivery, ID_User, City) VALUES
(11234555, 3, 'Cali'),
(22345653, 5, 'Palmira');

-- Insertar datos en la tabla branch
INSERT INTO branch (Name_Store, Address, Cell_phone, ID_Customer) VALUES
('Tienda 1', 'Calle 1 #2-3', 3231231234, 11123422),
('Tienda 2', 'Carrera 45 #67-89', 3564564567, 22345533),
('Tienda 3', 'Avenida Siempre Viva #123', 3189797890, 32223324);

-- Insertar datos en la tabla service
INSERT INTO service (Service_Code, Date, Origin, Destination, Number_of_Packages, Type_of_Transport, Description, City, ID_Customer, ID_Delivery) VALUES
(DEFAULT, '2023-01-01', 'Cali', 'Bogotá', 10, 'Car', 'Entrega urgente de documentos', 'Cali', 11123422, 11234555),
(DEFAULT, '2023-02-01', 'Medellín', 'Cali', 20, 'Motorcycle', 'Envío de paquetes pequeños', 'Medellín', 22345533, 11234555),
(DEFAULT, '2023-03-01', 'Bogotá', 'Medellín', 30, 'Truck', 'Transporte de mercancía', 'Bogotá', 32223324, 11234555),
(DEFAULT, '2023-04-01', 'Cali', 'Palmira', 40, 'Car', 'Entrega de productos electrónicos', 'Cali', 11123422, 22345653),
(DEFAULT, '2023-05-01', 'Bogotá', 'Cali', 50, 'Motorcycle', 'Envío de documentos legales', 'Bogotá', 11123422, 22345653),
(DEFAULT, '2023-06-01', 'Medellín', 'Bogotá', 60, 'Truck', 'Transporte de muebles', 'Medellín', 22345533, 22345653);

-- Inserting data into status table
INSERT INTO status (Date, Type_Status, ID_Service) VALUES
('2024-01-02', 'Delivered', 1),
('2024-02-02', 'Pickedup', 2),
('2024-03-02', 'Required', 3),
('2024-04-02', 'Delivered', 4),
('2024-05-02', 'Pickedup', 5),
('2024-06-02', 'Required', 6);

-- Inserting data into photos table
INSERT INTO photos (URL_Images, Date, ID_Service) VALUES
('http://example.com/photo1.jpg', '2024-04-03', 1),
('http://example.com/photo2.jpg', '2024-02-03', 2),
('http://example.com/photo3.jpg', '2024-03-03', 3),
('http://example.com/photo4.jpg', '2024-04-03', 4),
('http://example.com/photo5.jpg', '2024-05-03', 5),
('http://example.com/photo6.jpg', '2024-06-03', 6);

