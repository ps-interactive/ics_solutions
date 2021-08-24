SELECT a.name, m.title
FROM Actors a
INNER JOIN Actors_Movies am
ON a.id = am.actor_id
INNER JOIN Movies m
ON am.movie_id = m.id
ORDER BY m.title;