# Write your MySQL query statement below
SELECT DISTINCT
P.product_id,
P.product_name
FROM Product P
INNER JOIN Sales S on S.product_id = P.product_id
WHERE S.product_id NOT IN (SELECT product_id FROM Sales WHERE sale_date>'2019-03-31' OR sale_date < '2019-01-01');