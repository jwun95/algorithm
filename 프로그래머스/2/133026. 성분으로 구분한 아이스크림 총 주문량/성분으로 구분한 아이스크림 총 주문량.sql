-- 코드를 입력하세요
SELECT INGREDIENT_TYPE, sum(TOTAL_ORDER) as TOTAL_ORDER
FROM FIRST_HALF as F
inner join ICECREAM_INFO as I
on F.FLAVOR = I.FLAVOR
group by INGREDIENT_TYPE
order by TOTAL_ORDER;