-- 코드를 입력하세요
SELECT YEAR(A.sales_date) as YEAR, MONTH(A.sales_date) as MONTH, COUNT(DISTINCT A.USER_ID) as PUCHASED_USERS,
ROUND(COUNT(DISTINCT A.USER_ID) / (
    SELECT COUNT(*)
    FROM USER_INFO
    WHERE JOINED BETWEEN '2021-01-01' and '2021-12-31'
), 1) as PUCHASED_RATIO
FROM ONLINE_SALE AS A
INNER JOIN (
    SELECT USER_ID, JOINED
    FROM USER_INFO
    WHERE JOINED BETWEEN '2021-01-01' and '2021-12-31'
) AS B
ON A.USER_ID = B.USER_ID
GROUP BY YEAR(A.sales_date), MONTH(A.sales_date)
ORDER BY YEAR, MONTH;