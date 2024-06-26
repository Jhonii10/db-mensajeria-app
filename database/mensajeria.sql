CREATE TABLE users (
    ID_User SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Login VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Rol VARCHAR(50) NOT NULL,
    Address VARCHAR(255),
    Cell_phone BIGINT,
    CHECK (Rol IN ('Customer', 'Delivery', 'Manager'))
);

CREATE TABLE customer (
    ID_Customer INT PRIMARY KEY,
    ID_User INT NOT NULL,
    City VARCHAR(100),
    FOREIGN KEY (ID_User) REFERENCES users (ID_User) ON DELETE CASCADE
);

CREATE TABLE delivery ( 
    ID_Delivery INT PRIMARY KEY, 
    ID_User INT NOT NULL,
    City VARCHAR(100),
    FOREIGN KEY (ID_User) REFERENCES users (ID_User) ON DELETE CASCADE
);

CREATE TABLE branch (
    ID_Branch SERIAL PRIMARY KEY,
    Name_Store VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    Cell_phone BIGINT,
    ID_Customer INT,
    FOREIGN KEY (ID_Customer) REFERENCES customer (ID_Customer) ON DELETE CASCADE
);

CREATE TABLE service (
    ID_Service SERIAL PRIMARY KEY,
    Service_Code SERIAL UNIQUE,
    Date DATE,
    Origin VARCHAR(255),
    Destination VARCHAR(255),
    Number_of_Packages INT,
    Type_of_Transport VARCHAR(20),
    Description VARCHAR(255),
    City VARCHAR(100),
    CHECK (Type_of_Transport IN ('Car', 'Motorcycle', 'Truck')),
    ID_Customer INT, 
    ID_Delivery VARCHAR (50)	
);

CREATE TABLE status (
    ID_Status SERIAL PRIMARY KEY,
    Date DATE,
    Type_Status VARCHAR(20),
    CHECK(Type_Status IN ('Delivered','Pickedup','Required')), 
    ID_Service INT UNIQUE,
    FOREIGN KEY (ID_Service) REFERENCES service (ID_Service) ON DELETE CASCADE
);

CREATE TABLE photos (
    ID_Photo SERIAL PRIMARY KEY,
    URL_Images VARCHAR(255),
    Date DATE,
    ID_Service INT,
    FOREIGN KEY (ID_Service) REFERENCES service (ID_Service) ON DELETE CASCADE
);
