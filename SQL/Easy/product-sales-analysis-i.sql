# Write your MySQL query statement below
SELECT 
P.product_name, S.year, S.price
FROM Sales S
JOIN Product P WHERE P.product_id = S.product_id