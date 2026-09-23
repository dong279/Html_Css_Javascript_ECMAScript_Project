# book_react_router

`book_react_first` (React 기초 과제) 를 **라우터 · axios · zustand** 로 리팩토링하고,
폴더 구조를 실무 프런트엔드 프로젝트 방식으로 다시 나눈 버전입니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 배포 번들
npm run preview  # 빌드 결과 확인
npm run lint     # ESLint
npm run format   # Prettier
```

백엔드(`MySpringBootLabProject`) 를 `http://localhost:8080` 에 먼저 띄워야 합니다.

## 기술 스택

| 구분      | 선택                | 이유                                               |
| --------- | ------------------- | -------------------------------------------------- |
| 라우팅    | react-router-dom v7 | 화면 상태(수정 중·상세 보기)를 주소로 옮기기 위해  |
| 서버 통신 | axios               | 인스턴스 · 인터셉터로 에러 처리를 한 곳에 모으려고 |
| 전역 상태 | zustand             | Provider 없이 store 하나로 목록·알림을 공유        |
| 스타일    | CSS Modules + 토큰  | 클래스 충돌 제거, 색·간격을 변수 한 곳에서 관리    |

## 폴더 구조

```
src/
├─ app/                    조립 계층 — 헤더, 라우트 표, 전역 알림
│  ├─ App.jsx
│  ├─ AppHeader.jsx / .module.css
│  ├─ AppMessage.jsx
│  └─ routes.jsx
├─ pages/                  라우트 한 칸 = 파일 하나
│  ├─ BookListPage.jsx
│  ├─ BookFormPage.jsx
│  ├─ BookDetailPage.jsx
│  └─ NotFoundPage.jsx
├─ features/
│  └─ books/               도서 도메인 (기능 단위로 닫힌 슬라이스)
│     ├─ api/bookApi.js        엔드포인트 정의
│     ├─ model/
│     │  ├─ bookStore.js       zustand store
│     │  ├─ bookMapper.js      폼 ↔ 서버 DTO 변환
│     │  └─ bookValidation.js  검증 규칙 표
│     ├─ ui/                   BookTable · BookForm · BookDetail
│     ├─ constants.js
│     └─ index.js              공개 API (바깥은 이 파일로만 import)
└─ shared/                 도메인을 모르는 공용 코드
   ├─ api/httpClient.js        axios 인스턴스 + 인터셉터
   ├─ api/ApiError.js          에러 정규화 클래스
   ├─ config/env.js            환경 변수
   ├─ config/paths.js          라우트 경로 상수
   ├─ constants/messages.js    HTTP 상태별 메시지
   ├─ lib/                     format · convert · isUrl
   ├─ model/uiStore.js         전역 알림 store
   ├─ styles/tokens.css        디자인 토큰
   ├─ styles/global.css        리셋 + 기본 요소
   └─ ui/                      Button · TextField · Message · StatusPanel
```

의존 방향은 한쪽입니다. `app → pages → features → shared`.
`shared` 는 아무것도 모르고, `features/books` 는 `shared` 만 알고,
`pages` 는 기능 슬라이스를 조립하고, `app` 은 주소와 화면을 연결합니다.
역방향 import 가 생기면 구조가 무너졌다는 신호입니다.

## 5부(book_react_first) 에서 달라진 점

| 항목      | book_react_first                 | book_react_router                        |
| --------- | -------------------------------- | ---------------------------------------- |
| 화면 전환 | `editingId` · `detailBook` state | 주소 (`/new`, `/edit/:id`, `/books/:id`) |
| 서버 통신 | 컴포넌트마다 `fetch`             | `httpClient` 인스턴스 + 인터셉터         |
| 에러 처리 | 호출부마다 `if (!res.ok)`        | 인터셉터가 `ApiError` 로 정규화          |
| 상태      | `App.jsx` 의 useState 7개        | `bookStore` · `uiStore`                  |
| App.jsx   | 약 300줄                         | 12줄 (헤더 + 라우트)                     |
| 스타일    | 전역 `style.css` 한 장           | 토큰 + 컴포넌트별 `.module.css`          |
| 입력칸    | JSX 11개 반복                    | `FIELDS` 배열 + `TextField` 재사용       |

### 설계 메모

- **`key="create"` / `key="edit"`** — 한 컴포넌트(`BookFormPage`)가 등록·수정 두 주소를
  맡습니다. Route 에 서로 다른 key 를 주면 주소가 바뀔 때 React 가 컴포넌트를 새로 만들어
  앞 화면의 입력이 남지 않습니다. effect 안에서 state 를 초기화하지 않아도 되므로
  `react-hooks/set-state-in-effect` 경고도 사라집니다.
- **메시지가 두 갈래** — 폼 검증 결과는 그 폼에서만 쓰므로 `BookFormPage` 의 지역 state,
  서버 결과는 등록 성공 후 목록 화면에서도 보여야 하므로 `uiStore` 입니다.
- **`PATHS`** — `<Route path>` 와 `<Link to>` 가 같은 상수를 씁니다.
  주소를 바꿀 때 고칠 곳이 한 군데입니다.
- **`VITE_` 접두사** — `.env.*` 의 값은 빌드 결과물에 그대로 박힙니다.
  비밀 값에는 절대 `VITE_` 를 붙이지 않습니다.
