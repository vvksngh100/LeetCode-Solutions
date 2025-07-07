# Write your MySQL query statement below
SELECT
V.customer_id,
COUNT(V.customer_id) AS count_no_trans
FROM Visits V
WHERE V.visit_id NOT IN (SELECT visit_id FROM Transactions)
GROUP BY V.customer_id;