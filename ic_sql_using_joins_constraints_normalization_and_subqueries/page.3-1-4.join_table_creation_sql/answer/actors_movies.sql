CREATE TABLE Actors_Movies (
  actor_id int REFERENCES actors,
  movie_id int REFERENCES movies
);