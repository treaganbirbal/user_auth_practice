DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

\c test;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password_digest VARCHAR NOT NULL
)