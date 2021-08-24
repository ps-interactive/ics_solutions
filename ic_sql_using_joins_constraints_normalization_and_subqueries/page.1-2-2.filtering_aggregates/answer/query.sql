SELECT country, SUM(salary)
FROM Actors
WHERE role = 'supporting'
GROUP BY country
HAVING COUNT(*) > 1;
