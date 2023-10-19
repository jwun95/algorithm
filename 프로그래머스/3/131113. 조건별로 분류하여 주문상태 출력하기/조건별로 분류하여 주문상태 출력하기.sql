-- 코드를 입력하세요
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE, "%Y-%m-%d") as OUT_DATE,
CASE WHEN OUT_DATE <= "2022-05-01" then '출고완료'
WHEN OUT_DATE > "2022-05-01" then '출고대기'
else '출고미정' end as '출고여부'
FROM FOOD_ORDER
ORDER BY ORDER_ID;