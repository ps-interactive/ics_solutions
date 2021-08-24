SELECT title
FROM movies
WHERE id IN (SELECT movie_id FROM rooms WHERE seats > 75);