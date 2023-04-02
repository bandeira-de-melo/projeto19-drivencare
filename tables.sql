CREATE TABLE pacients(
  id serial PRIMARY KEY,
  name varchar(160) NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
);

CREATE TABLE doctors(
  id serial PRIMARY KEY,
  name varchar(160) NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  specialty varchar(180)
  location TEXT NOT NULL
);

CREATE TABLE appointments(
  id serial PRIMARY KEY,
  doctor_id,
  pacient_id,
  date DATE NOT NULL,
  starts_at TIMESTAMP WITH TIME ZONE NOT NULL,
  ends_at TIMESTAMP WITH TIME ZONE NOT NULL,
  taken BOOLEAN NOT NULL default false,
  confirmed_by_doc BOOLEAN NOT NULL default false,
  done BOOLEAN NOT NULL default false,
);