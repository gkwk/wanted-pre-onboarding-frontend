# wanted-pre-onboarding-frontend

# 지원자 성명
- 최성일

# Assignment 0
- [✔] Create React App을 이용해 과제를 구현해주세요. Create React App외의 다른 툴체인 사용은 허용하지 않습니다.
- [✔] 프로젝트는 Node.js LTS 버전에서 실행 가능해야 합니다.
- [✔] git clone 후, npm install & npm start 명령어를 통해서 바로 정상동작이 가능하게 해주세요. 추가적인 과정 없이 바로 실행이 가능하도록 해주세요
- [✔] 함수 컴포넌트를 이용해서 진행해주세요.
- [✔] UI는 지원자 개인이 생각했을 때 자연스러운 형태로 구현해주세요, UI는 평가에 영향을 미치지 않습니다.
- [✔] README.md 작성은 필수입니다. 아래의 사항은 반드시 포함되도록 해주세요.
    - [✔] 지원자의 성명
    - [✔] 프로젝트의 실행 방법
    - [✔] 데모 영상
    - [✔] 데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다.
- [✔] 기능구현에 직접적으로 연관된 라이브러리 사용은 허용되지 않습니다.(React-Query 등)
- [✔] 사용가능한 라이브러리 목록은 아래와 같습니다.
    - [✔] React Router(react-router-dom)
    - HTTP Client 라이브러리(Axios 등)
    - 스타일링 관련 라이브러리(Sass, Styled Components, Emotion, tailwind 등)
    - [✔] 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등)
    - 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv, typescript, testing library 등)
- [✔] 페이지별로 요구되는 경로는 도메인 URL뒤에 바로 이어지도록 설정해주세요. (`localhost:3000/signup`)
# Assignment 1
- [✔] /signup 경로에 회원가입 기능을 개발해주세요.
- [✔] /signin 경로에 로그인 기능을 개발해주세요.
- [✔] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요.
    - [✔] 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요.
    - [✔] 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요.
    - [✔] 회원가입 페이지에는 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요.
    - [✔] 로그인 페이지에는 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요.
- [✔] 두 페이지의 UI는 동일해도 무방합니다.
- [✔] 회원가입과 로그인 페이지의 버튼에 부여되는 test-id가 다른 것에 유의해주세요.
- [✔] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요.
    - [✔] 이메일 조건: @ 포함
    - [✔] 비밀번호 조건: 8자 이상
    - [✔] 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요. (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)
- [✔] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요
- [✔] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.
- [✔] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요.
- [✔] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요.
    - [✔] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다. 응답받은 JWT는 로컬 스토리지에 저장해주세요.
- [✔] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요.
    - [✔] 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요.
    - [✔] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요.

# Assignment 2
- [✔] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요.
- [✔] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [✔] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요.
- [✔] TODO는 `<li>` tag를 이용해 감싸주세요.
- [✔] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요.
    - [✔] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요.
    - [✔] TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요.
- [✔] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요.
- [✔] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.
- [✔] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
- [✔] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요.
    - [✔] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요.
    - [✔] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요.
- [✔] 투두 리스트의 삭제 기능을 구현해주세요.
    - [✔] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요.
- [✔] 투두 리스트의 수정 기능을 구현해주세요.
    - [✔] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요.
    - [✔] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
    - [✔] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요.
        - [✔] 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요.
    - [✔] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요.
        - [✔] 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요.
        - [✔] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요.
    - [✔] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요.
    - [✔] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요.

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

- 실행 후 `http://localhost:3000` 로 서버에 접속할 수 있습니다.

## 프로젝트 주요 파일 설명

### src/App.jsx
- react-router-dom를 사용한 라우팅 기능 구현
- react-router-dom의 loader를 사용하여 로그인 여부에 따른 페이지 접근 가능 여부 판별 기능 구현

###  src/page/*.jsx
- react를 사용한 페이지들
    - Main.jsx : 메인페이지
    - SignIn.jsx : 유효성 검사기와 fetch를 사용한 로그인 페이지
    - SignUp.jsx : 유효성 검사기와 fetch를 사용한 회원가입 페이지
    - SignOut.jsx : JWT 삭제를 통한 로그아웃 실행 페이지
    - ToDo.jsx : ToDo를 구현한 페이지. ToDo의 해야 할 일, 완료 여부 구현. CRUD 기능 구현
    - NotFound.jsx : App.jsx에 등록된 URL외의 다른 URL에 접근시 404 Not Found를 출력

### src/validator/*.jsx
- SignIn.jsx, SignUp.jsx에 사용되는 유효성 검사기

### src/htmlpreset/*.jsx
- src/page/*.jsx에 사용되는 Header와 Footer

### src/AuthCheck/AuthCheck.jsx
- 로그인 여부 판별에 사용

# 데모 영상
## 계정 생성
<img width="80%" src="https://github.com/gkwk/wanted-pre-onboarding-frontend/assets/124476558/a7359495-b8d1-4f1b-8127-2acbec54028c.gif"/>

## 계정 접속
<img width="80%" src="https://github.com/gkwk/wanted-pre-onboarding-frontend/assets/124476558/738c929a-4b72-46d3-af2e-3442995aedad.gif"/>

## ToDo CRUD
<img width="80%" src="https://github.com/gkwk/wanted-pre-onboarding-frontend/assets/124476558/dd83af69-6c23-43ce-93bd-5c1bf6f3bb00.gif"/>

## 리다이렉트
<img width="80%" src="https://github.com/gkwk/wanted-pre-onboarding-frontend/assets/124476558/1de8a89a-ad78-4f7e-8916-e54e64ac0279.gif"/>


# 배포 주소
- https://gkwk-wpof.pages.dev/