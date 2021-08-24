SELECT m.title, r.id "Theatre Number"
FROM Movies m
RIGHT OUTER JOIN Rooms r
ON m.id = r.movie_id;