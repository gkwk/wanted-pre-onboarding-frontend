# wanted-pre-onboarding-frontend

# 지원자 성명
- 최성일

# 프로젝트

## 프로젝트에 사용된 라이브러리
- react 18.2.0
- react-router-dom 6.15.0
- bootstrap 5.3.1

## 프로젝트 실행 방법

```zsh
$ npm install
$ npm start
```

- 실행 후 http://localhost:3000 로 서버에 접속할 수 있습니다.

## 프로젝트 주요 파일 설명

### src/App.jsx
- react-router-dom를 사용한 라우팅 기능 구현
- react-router-dom의 loader를 사용하여 로그인 여부에 따른 페이지 접근 가능 여부 판별 기능 구현

###  src/page/*.jsx
- react를 사용한 페이지들
    - Main.jsx : 메인페이지
    - SignIn.jsx : 유효성 검사기와 fetch를 사용한 로그인 페이지
    - SignUp.jsx : 유효성 검사기와 fetch를 사용한 회원가입 페이지
    - ToDo.jsx : ToDo를 구현한 페이지. ToDo의 해야 할 일, 완료 여부 구현. CRUD 기능 구현
    - NotFound.jsx : App.jsx에 등록된 URL외의 다른 URL에 접근시 404 Not Found를 출력

### src/validator/*.jsx
- SignIn.jsx, SignUp.jsx에 사용되는 유효성 검사기

### src/htmlpreset/*.jsx
- src/page/*.jsx에 사용되는 Header와 Footer

## src/AuthCheck/AuthCheck.jsx
- 로그인 여부 판별에 사용

# 데모 영상

# 배포 주소

