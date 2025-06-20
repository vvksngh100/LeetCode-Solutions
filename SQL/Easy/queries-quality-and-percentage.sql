# Write your MySQL query statement below
SELECT
q.query_name,
ROUND(SUM(q.rating/q.position)/COUNT(*), 2) AS quality,
ROUND(((select count(*) from Queries where rating < 3 and q.query_name = query_name) / COUNT(*)) * 100, 2) AS poor_query_percentage
FROM Queries q
GROUP BY query_name;
