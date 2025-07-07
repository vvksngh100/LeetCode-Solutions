# Write your MySQL query statement below
SELECT * 
FROM Users
WHERE mail REGEXP '^[A-Za-z][A-Za-z0-9._-]*@leetcode\\.com$'
  AND BINARY RIGHT(mail, LENGTH('@leetcode.com')) = '@leetcode.com';

