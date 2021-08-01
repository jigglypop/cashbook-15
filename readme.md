# 우아한 가계부 By. team-15

## 데모 링크

[http://52.79.152.101:3000/](http://52.79.152.101:3000/)

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

<div style="display: flex">
  <img src="https://user-images.githubusercontent.com/45786387/127775127-e839a6c2-9497-43c0-991b-b603bc5ccd1b.png" alt="ERD" />
  
  - User - 사용자 (자체 로그인 / 깃헙 로그인)
  - Record - 수입/지출 내역
  - Payment - 결제수단
  - Category - 내역 카테고리
</div>

# API Spec

회원가입
```http request
POST /api/auth/register
Accept: application/json
Content-Type: application/json

{
  "username": "유저 이름",
  "email": "email@email.com",
  "password": "비밀번호"
}

// response
{
  "data": {
    "id": 0,
    "username": "유저 이름",
    "email": "email@email.com",
    "updatedAt": "2021-08-01T15:44:08.750Z",
    "createdAt": "2021-08-01T15:44:08.750Z"
  }
} 
```

로그인
```http request
POST /api/auth/login
Accept: application/json
Content-Type: application/json

{
  "username": "유저 이름",
  "password": "비밀번호"
}
// response
{
  "data": {
    "id": 0,
    "username": "유저 이름",
    "email": "email@email.com",
    "updatedAt": "2021-08-01T15:44:08.750Z",
    "createdAt": "2021-08-01T15:44:08.750Z"
  }
} 
```

토큰을 통한 로그인 여부 체크
```http request
GET /api/auth/check
Accept: application/json
Content-Type: application/json
Authorization: token

// response
{
  "data": {
    "id": 0,
    "username": "유저 이름",
    "email": "email@email.com",
    "updatedAt": "2021-08-01T15:44:08.750Z",
    "createdAt": "2021-08-01T15:44:08.750Z"
  }
} 
```