UPDATE concessions
SET item = 'Hamburger'
WHERE id = 8;

UPDATE concessions
SET price = 1.00
WHERE item = 'Popcorn'
OR item = 'Candy';
