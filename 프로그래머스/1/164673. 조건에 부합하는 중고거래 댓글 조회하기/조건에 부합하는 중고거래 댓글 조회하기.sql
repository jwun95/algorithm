-- 코드를 입력하세요
SELECT a.TITLE, a.BOARD_ID, b.REPLY_ID, b.WRITER_ID, b.CONTENTS, date_format(b.CREATED_DATE, '%Y-%m-%d') as CREATED_DATE
from USED_GOODS_BOARD as a
inner join USED_GOODS_REPLY as b
on a.BOARD_ID = b.BOARD_ID
where a.CREATED_DATE like '2022-10-%'
order by b.CREATED_DATE, a.TITLE;
# SELECT b.TITLE,b.BOARD_ID,r.REPLY_ID,r.WRITER_ID,r.CONTENTS,date_format(r.CREATED_DATE,"%Y-%m-%d") CREATED_DATE
# from USED_GOODS_BOARD b, USED_GOODS_REPLY r 

# where b.BOARD_ID = r.BOARD_ID and
# date_format(b.CREATED_DATE,"%Y%m")=202210 

# order by r.CREATED_DATE ,b.TITLE