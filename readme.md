# 우아한 가계부 By. team-15

## 데모 링크

[http://3.35.222.215:3000/](http://3.35.222.215:3000/)

## 염동환

- 개발을 사랑하는 개발자입니다!!
- **다작으로 승부한다** 다양한 포트폴리오를 가진 개발자
- **INTP**
- **그림을 좋아합니다**
- **민초 찍먹 외않혜요?**
- **삑세게 코딩하자**

## [김현우](https://github.com/hwookim)

- 학교가 싫어 도망친 미래의 프론트엔드 개발자입니다.
- 좀 더 나은 코드를 짜기 위해 항상 고민합니다.

# 실행 방법

```shell
yarn install
yarn run start
# Server will running port 3000
```

# Database 설계
### [Wiki에서 보기](https://github.com/woowa-techcamp-2021/cashbook-15/wiki/DB-tables)

<div style="display: flex">
  <img src="https://user-images.githubusercontent.com/45786387/128116832-fcc61e89-17ab-4429-89d8-315f15e849c1.png" alt="ERD" />

  - User - 사용자 (자체 로그인 / 깃헙 로그인)
  - Record - 수입/지출 내역
  - Payment - 결제수단
  - Category - 내역 카테고리
  - YearCategories - 통계 페이지 지출 내역 조회용 테이블 
</div>

# API Spec

### [Wiki에서 보기](https://github.com/woowa-techcamp-2021/cashbook-15/wiki/API-spec)