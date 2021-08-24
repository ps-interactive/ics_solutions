SELECT r.id, m.title
FROM rooms r
LEFT OUTER JOIN movies m
ON r.movie_id = m.id
WHERE seats > (SELECT AVG(seats) FROM rooms);