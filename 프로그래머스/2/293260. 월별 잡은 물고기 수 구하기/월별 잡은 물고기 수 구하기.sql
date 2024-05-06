-- 코드를 작성해주세요
select count(*) FISH_COUNT, MONTH(TIME) as "MONTH" from FISH_INFO group by MONTH
order by MONTH;