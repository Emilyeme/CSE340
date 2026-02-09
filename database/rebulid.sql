-- Drop old tables if they exist
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS classification CASCADE;

-- Create ENUM type for account_type
CREATE TYPE account_type_enum AS ENUM ('Client', 'Admin');

-- Create classification table
CREATE TABLE classification (
    classification_id SERIAL PRIMARY KEY,
    classification_name VARCHAR(50) NOT NULL
);

-- Create account table
CREATE TABLE account (
    account_id SERIAL PRIMARY KEY,
    account_firstname VARCHAR(50) NOT NULL,
    account_lastname VARCHAR(50) NOT NULL,
    account_email VARCHAR(100) UNIQUE NOT NULL,
    account_password VARCHAR(255) NOT NULL,
    account_type account_type_enum DEFAULT 'Client'
);

-- Create inventory table
CREATE TABLE inventory (
    inv_id SERIAL PRIMARY KEY,
    inv_make VARCHAR(50) NOT NULL,
    inv_model VARCHAR(50) NOT NULL,
    inv_description TEXT NOT NULL,
    inv_image VARCHAR(100),
    inv_thumbnail VARCHAR(100),
    classification_id INT REFERENCES classification(classification_id)
);

-- Insert starter data into classification
INSERT INTO classification (classification_name)
VALUES ('SUV'), ('Truck'), ('Sport'), ('Sedan');

-- Insert starter data into inventory
INSERT INTO inventory (inv_make, inv_model, inv_description, inv_image, inv_thumbnail, classification_id)
VALUES 
('GM', 'Hummer', 'This vehicle has small interiors', '/images/hummer.jpg', '/images/hummer-thumb.jpg', 1),
('Ford', 'F-150', 'A reliable truck with strong towing capacity', '/images/f150.jpg', '/images/f150-thumb.jpg', 2),
('Chevrolet', 'Corvette', 'A sleek design with powerful performance', '/images/corvette.jpg', '/images/corvette-thumb.jpg', 3),
('Toyota', 'Camry', 'A family sedan with great fuel economy', '/images/camry.jpg', '/images/camry-thumb.jpg', 4);

-- Queries from Assignment 2 (Task One #4 and #6)
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
