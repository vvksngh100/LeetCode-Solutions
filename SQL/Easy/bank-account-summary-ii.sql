# Write your MySQL query statement below
SELECT 
U.name,
SUM(T.amount) AS balance
FROM Users U
JOIN Transactions T ON T.account = U.account
GROUP BY T.account
HAVING balance > 10000;