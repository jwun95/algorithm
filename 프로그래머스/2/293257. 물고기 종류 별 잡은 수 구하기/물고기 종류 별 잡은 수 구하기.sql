-- 코드를 작성해주세요
select count(*) as FISH_COUNT ,b.fish_name as FISH_NAME from fish_info as a left join FISH_NAME_INFO as b on a.FISH_TYPE = b.FISH_TYPE group by b.fish_name order by FISH_COUNT desc;