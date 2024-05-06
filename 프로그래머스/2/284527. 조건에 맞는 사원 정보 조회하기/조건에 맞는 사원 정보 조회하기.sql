-- 코드를 작성해주세요
select SUM(grd.score) as SCORE, emp.EMP_NO, emp.EMP_NAME, emp.POSITION, emp.EMAIL from HR_EMPLOYEES as emp 
left join HR_GRADE as grd on emp.EMP_NO = grd.EMP_NO
left join HR_DEPARTMENT as dep on emp.DEPT_ID = dep.DEPT_ID
group by emp.EMP_NO order by SCORE desc limit 1;