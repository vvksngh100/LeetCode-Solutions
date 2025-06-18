# Write your MySQL query statement below
SELECT
COALESCE(MAX(num), null) as num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num 
    HAVING COUNT(num) = 1
) as SingleSelect;