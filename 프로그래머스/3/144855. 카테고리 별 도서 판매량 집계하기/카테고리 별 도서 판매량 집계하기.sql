-- 코드를 입력하세요
SELECT a.CATEGORY, sum(b.SALES) as TOTAL_SALES
FROM BOOK as a
INNER JOIN BOOK_SALES as b
on a.BOOK_ID = b.BOOK_ID
WHERE b.SALES_DATE like '2022-01%'
GROUP BY a.CATEGORY
ORDER BY a.CATEGORY;