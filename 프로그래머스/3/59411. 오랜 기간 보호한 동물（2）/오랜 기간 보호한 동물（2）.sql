-- 코드를 입력하세요
SELECT a.ANIMAL_ID, a.NAME
FROM ANIMAL_INS as a
INNER JOIN ANIMAL_OUTS as b
ON a.ANIMAL_ID = b.ANIMAL_ID
ORDER BY b.DATETIME - a.DATETIME desc
LIMIT 2;