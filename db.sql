-- Creating Database
CREATE DATABASE discovery;

-- Users Table
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    passcode VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Houses Table
CREATE TABLE houses(
    house_id SERIAL PRIMARY KEY,
    user_id INT 
    cost INT NOT NULL,
    location VARCHAR(255),
    showers INT,
    bedrooms INT, 
    parking INT,
    size INT,
    description TEXT, 
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    image4 VARCHAR(255),
    status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);