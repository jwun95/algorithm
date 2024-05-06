-- 코드를 작성해주세요
select count(*) FISH_COUNT from FISH_INFO as info
left join FISH_NAME_INFO as name on info.FISH_TYPE = name.FISH_TYPE
where name.FISH_NAME in ('BASS', 'SNAPPER');