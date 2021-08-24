SELECT item, price, size 
FROM concessions 
WHERE item = 'Soda' 
OR item = 'Popcorn' 
ORDER BY price DESC;
