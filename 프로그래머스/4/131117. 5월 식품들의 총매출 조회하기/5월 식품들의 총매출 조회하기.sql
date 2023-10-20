-- 코드를 입력하세요
SELECT b.PRODUCT_ID, a.PRODUCT_NAME, SUM(b.AMOUNT) * a.PRICE as TOTAL_SALES
FROM FOOD_PRODUCT as a
RIGHT JOIN FOOD_ORDER as b
ON a.PRODUCT_ID = b.PRODUCT_ID
WHERE a.PRODUCT_ID IS NOT NULL AND
b.PRODUCE_DATE like '2022-05%'
GROUP BY b.PRODUCT_ID
ORDER BY TOTAL_SALES desc,
b.PRODUCT_ID;