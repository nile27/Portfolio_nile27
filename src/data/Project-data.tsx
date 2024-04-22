interface projectTap {
  head: string;
  date: string;
  imgSrc: string[];
  member: string;
  Highlight: string | null;
  explanationList: string[];
  testEmail: string | null;
  testPw: string | null;
  explanation: string[];
  retrospect: string | undefined;
  retrospect_sub: string | undefined;
  stack: string[];
  etcStack: string[] | undefined;
  gitLink: string;
  siteLink: string;
  FigmaLink: string | undefined;
  study: string[] | undefined;
}

interface projectData {
  team: string;
  date: string;
  name: string;
}

export const projectArr: projectTap[] = [
  {
    head: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03 (5주)",
    imgSrc: [
      "https://github.com/nile27/My-Calender/assets/114140840/97d04e13-d75a-460d-b4ef-b424cb442a6e",
      "https://github.com/nile27/My-Calender/assets/114140840/1f56e936-25ae-4ee2-8f06-025d6f3818a6",
      "https://github.com/nile27/My-Calender/assets/114140840/ec3691f3-0145-4f1f-8c83-d973c665fcb9",
      "https://github.com/nile27/My-Calender/assets/114140840/3c667c13-a69a-4642-b582-49c18566a437",
    ],
    member: "Solo",
    Highlight: `Todo-list와 Calender를 합친 사이트이며, 일정을 태그와 함께 관리를 할 수 있고, 월 별로 볼 수 있습니다.`,
    explanationList: [
      "일정 CRUD와 태그 기능을 통해 일정을 관리할 수 있습니다.",
      "일정을 시간 별, 월 별로 한눈에 볼 수가 있습니다.",
      "검색 기능을 통해 일정 이름과 태그를 검색할 수 있습니다.",
    ],
    testEmail: null,
    testPw: null,
    explanation: [
      "figma를 이용한 화면 설계",
      "Date-fns와 Date-picker 라이브러리를 이용한 날짜 선택 기능",
      "Redux-tookit을 이용한 전역상태관리 및  태그별 필터링 기능",
      "반응형 웹",
      "공공데이터포털의 공휴일 OPEN API를 이용하여 공휴일 처리",
      "Date 객체를 이용하여 월 별 일정을 확인 할 수 있는 달력 개발",
      "Mongoose 라이브러리를 통해 CRUD 구현",
      "ExpressJS를 이용하여 일정, 검색 API 개발",
    ],
    retrospect:
      "하나의 일정이 있는 태그가 있을 때, 일정을 삭제할 때 태그도 같이 삭제 되는 버그 수정",
    retrospect_sub: undefined,
    stack: [
      "React",
      "Figma",
      "TypeScript",
      "Redux-toolkit",
      "Styled-Components",
      "Date-fns",
    ],
    etcStack: ["Axios", "Node.js", "Express.js", "Mongo DB"],
    gitLink: "https://github.com/nile27/My-Calender",
    siteLink: "http://calender123.s3-website.ap-northeast-2.amazonaws.com/",
    FigmaLink:
      "https://www.figma.com/file/xTzUSN4KQhBr6LU5IobyZ9/Calender?type=design&node-id=0-1&mode=design&t=rB8NpWGo0DaY3fqG-0",
    study: undefined,
  },
  {
    head: "Portfolio",
    date: "2023.08 ~ 2023.08 (2주)",
    imgSrc: [
      "https://user-images.githubusercontent.com/114140840/275229014-0fde6d2a-1ed9-4b52-ab7b-d2a66d14926c.gif",
      "https://user-images.githubusercontent.com/114140840/275229229-ffcd075f-c8bd-4525-8c16-bf36a4e6fa1d.gif",
      "https://user-images.githubusercontent.com/114140840/275229447-d65d0a1f-830c-468c-aa14-e8e5383065fb.gif",
      "https://user-images.githubusercontent.com/114140840/275229641-1fea8946-26bc-4322-9c9b-90d8e15d489c.gif",
    ],
    member: "Solo",
    Highlight: `타입스크립트를 사용하여 제작한 개인 포트폴리오 반응형 웹 사이트입니다.`,
    explanationList: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
    ],
    testEmail: null,
    testPw: null,
    explanation: [
      "figma를 이용한 화면 설계",
      "나만의 포트폴리오를 만들어 보기 위해서 제작",
      "새로운 css 툴을 사용해보기 위해 SCSS를 이용하여 제작",
      "keyframe을 통해 애니메이션 효과 제작 (Fade-in/out, DropDown 등)",
      "react-responsive 라이브러리를 통해 Dom Selector들 보다 쉽게 box의 사이즈 조절을 하여 반응형 웹 제작",
      "글, 이미지 등을 따로 관리하여 유지보수를 쉽게 제작",
    ],
    retrospect: undefined,
    retrospect_sub: undefined,
    stack: [
      "React",
      "Figma",
      "TypeScript",
      "Recoil",
      "SCSS",
      "react-responsive",
    ],
    etcStack: undefined,
    gitLink: "https://github.com/nile27/Portfolio_nile27",
    siteLink: "https://nile27.github.io/",
    FigmaLink:
      "https://www.figma.com/file/g0fMpeE9IiQ8Ww1Vd37qBd/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(UI)?type=design&node-id=0-1&mode=design&t=oLZkiFIQhixAqGtt-0",
    study: [
      "keyframe을 이용한 애니메이션 효과로 좋은 UX를 얻을 수 있는 방법",
      "타입 가드를 통해 목적에 맞지 않는 타입 변수들을 통해 버그를 사전에 방지하는 방법",
    ],
  },
  {
    head: "Eaaaaaaats (맛집 탐색 사이트)",
    date: "2023.06 ~ 2023.06 (4주)",
    imgSrc: [
      "https://user-images.githubusercontent.com/118884127/240876205-8526ffcd-84a9-48aa-a49e-7f36252d5e2a.gif",
      "https://user-images.githubusercontent.com/118884127/240876213-8a1fc9cd-ac09-4efe-baf8-0c6035199baf.gif",
      "https://user-images.githubusercontent.com/118884127/241088286-99f4ff31-8496-489e-bb63-96388298cc00.gif",
      "https://user-images.githubusercontent.com/118884127/240876220-2d012f0b-fb86-4f9d-8242-1c225cc88eb9.gif",
    ],
    member: "Team: FE: 4명, BE: 3명",
    Highlight: `“점심은 뭐 먹지”, “한 끼를 먹어도 제대로 먹어야지”라는 고민, 맛집 탐방이 취미인 사용자들을 위한 맛집 탐색 사이트`,
    explanationList: [
      "사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.",
      "가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.",
      "리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.",
      "사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.",
    ],
    testEmail: "Email - 사장님: test@gmail.com / 유저: user@gmail.com",
    testPw: "PW - 12341234",
    explanation: [
      "Front-end & Back-end 협업 프로젝트",
      "figma를 이용한 화면 설계",
      "카카오 지도 API와 가게 위치 자체 API를 이용하여 내 주변 가게 위치 지도 개발",
      "JWT를 이용한 회원 관련 기능 담당 (로그인/ 회원가입/ 회원정보 CRUD/ 사장님 계정, 일반 회원 계정)",
      "Recoil을 이용하여 전역상태관리",
      "ReactJS 개발환경부터 S3 Bucket 환경까지 구성 및 개발 진행",
    ],
    retrospect:
      "AWS 과금이 예상보다 많아, 데이터 흐름을 재조정하는 리펙토링 진행 ",
    retrospect_sub:
      "어떤 정보를 불러올 때, 데이터를 여러번 불러오는 현상 때문에 과금이 많이 발생이 되어서, 데이터 호출 함수를 기존 보다 상단 위치의 컴포넌트에 작성하여 데이터 호출을 줄이고, 재사용한 데이터을 세션 스토리지에 저장하여 중복 호출을 줄인 경험이 있습니다.",
    stack: [
      "React",
      "styled-component",
      "Recoil",
      "Axios",
      "Kakao Map API",
      "Figma",
    ],
    etcStack: undefined,
    gitLink: "https://github.com/nile27/Eaaaaaaats_refectoring",
    siteLink: "http://main22.s3-website.ap-northeast-2.amazonaws.com/",
    FigmaLink: undefined,
    study: [
      "유효성 검사를 통해 사용자의 오타로 인한 에러들을 줄이는 방법",
      "처음 프로젝트를 시작할 때, 어느 페이지에 어떤 데이터들이 필요한지 좀 더 세밀히 파악을 하여 데이터 과금을 줄이는 방법",
    ],
  },
];

export const projectHeadArr: projectData[] = [
  {
    team: "Solo",
    name: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03",
  },
  {
    team: "Solo",
    name: "포트폴리오",
    date: "2023.08 ~ 2023.08",
  },
  {
    team: "Team",
    name: "Eaaaaaaats",
    date: "2023.05 ~ 2023.05",
  },
];
