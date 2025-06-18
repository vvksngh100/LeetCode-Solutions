# Write your MySQL query statement below
SELECT
SP.name 
FROM SalesPerson SP 
WHERE sales_id NOT IN (SELECT DISTINCT
O.sales_id
FROM Orders O
JOIN Company C ON C.com_id = O.com_id
WHERE C.name = 'RED');