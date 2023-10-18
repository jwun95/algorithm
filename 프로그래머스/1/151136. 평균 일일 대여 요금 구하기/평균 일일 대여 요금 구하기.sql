-- 코드를 입력하세요
SELECT round(sum(DAILY_FEE) / count(CAR_ID)) as AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR where CAR_TYPE = 'SUV';