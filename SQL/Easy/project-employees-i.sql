# Write your MySQL query statement below
SELECT
P.project_id,
ROUND(AVG(E.experience_years), 2) as average_years
FROM Employee E
JOIN Project P on P.employee_id = E.employee_id
GROUP BY P.project_id