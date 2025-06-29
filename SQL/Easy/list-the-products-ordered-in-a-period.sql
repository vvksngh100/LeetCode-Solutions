# Write your MySQL query statement below
SELECT
p.product_name,
SUM(o.unit) as unit
FROM Products p
JOIN Orders o ON o.product_id = p.product_id
WHERE o.order_date BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY p.product_id
HAVING unit >= 100;