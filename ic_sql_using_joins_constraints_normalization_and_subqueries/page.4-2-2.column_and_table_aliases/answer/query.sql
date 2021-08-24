SELECT m.title 'Movie Title', r.id 'Theatre Number', r.seats
FROM Movies m
INNER JOIN Rooms r
ON m.id = r.movie_id
WHERE r.seats > 75
ORDER BY r.seats desc;