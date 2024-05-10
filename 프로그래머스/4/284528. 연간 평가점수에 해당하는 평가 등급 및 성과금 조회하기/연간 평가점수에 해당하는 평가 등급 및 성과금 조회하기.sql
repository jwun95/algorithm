-- 코드를 작성해주세요
select a.EMP_NO, a.EMP_NAME, (
case when b.average >= 96 then 'S'
when b.average >= 90 then 'A'
when b.average >= 80 then 'B'
else 'C'
end) as GRADE,
(
case when b.average >= 96 then (SAL * 0.2)
when b.average >= 90 then (SAL * 0.15)
when b.average >= 80 then (SAL * 0.1)
else 0
end
) as BONUS
from HR_EMPLOYEES as a
left join (select emp_no, avg(score) average from HR_GRADE group by EMP_NO) as b
on a.EMP_NO = b.EMP_NO
order by a.EMP_NO;