CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  salary int CHECK (salary >= 500),
  bonus integer CHECK (bonus < salary),
  country_id int REFERENCES Countries(id)
);