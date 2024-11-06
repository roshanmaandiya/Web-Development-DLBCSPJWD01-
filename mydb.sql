-- Create the database
CREATE DATABASE IF NOT EXISTS mydatabase;

-- Use the newly created database
USE mydatabase;

-- Create a table to store currency rates manually entered
CREATE TABLE IF NOT EXISTS currency_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    currency_code VARCHAR(5) NOT NULL,
    currency_rate DECIMAL(10, 2) NOT NULL,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data (optional)
INSERT INTO currency_data (currency_code, currency_rate) 
VALUES ('USD', 1.00), ('EUR', 0.85), ('GBP', 0.75), ('JPY', 110.53);
