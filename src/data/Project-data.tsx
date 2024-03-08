interface projectTap {
  head: string;
  date: string;
  imgSrc: string[];
  member: string;
  Highlight: string | null;
  explanationList: string[];
  testEmail: string | null;
  testPw: string | null;
  explanation: string | null;
  retrospect: string;
  stack: string[];
  etcStack: string[] | undefined;
  gitLink: string;
  siteLink: string;
  FigmaLink: string | undefined;
}

interface projectData {
  team: string;
  date: string;
  name: string;
}

export const projectArr: projectTap[] = [
  {
    head: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03 (4주)",
    imgSrc: [
      "https://github.com/nile27/My-Calender/assets/114140840/97d04e13-d75a-460d-b4ef-b424cb442a6e",
      "https://github.com/nile27/My-Calender/assets/114140840/1f56e936-25ae-4ee2-8f06-025d6f3818a6",
      "https://github.com/nile27/My-Calender/assets/114140840/ec3691f3-0145-4f1f-8c83-d973c665fcb9",
      "https://github.com/nile27/My-Calender/assets/114140840/3c667c13-a69a-4642-b582-49c18566a437",
    ],
    member: "Solo",
    Highlight: `React와 Express.js을 이용한 풀스택 프로젝트입니다.`,
    explanationList: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
    ],
    testEmail: null,
    testPw: null,
    explanation: "",
    retrospect: "",
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
    explanation:
      "포트폴리오를 제작하기 위해 Notion 같은 플랫폼을 사용하다 저 만의 포트폴리오를 만들어 보기 위해서 제작을 하였습니다. css 라이브러리인 styled-component만 사용하다가 다른 css 툴을 사용해 보기 위해서 ScSS를 사용하여 제작하였습니다. 애니메이션 효과를 줄 수 있는 Keyframe을 사용하고, Fade-in/out, DropDown 등 다양한 애니메이션을 제작 하였고, react-responsive라는 라이브러리를 통해 Dom Selector들 보다 쉽게 box의 사이즈 조절을 하여 반응형 웹을 제작하였습니다.",
    retrospect:
      "내비게이션 바, DropDown 창 등을 Keyframe을 통해 애니메이션 효과를 주워 변화가 적은 애니메이션으로도, 유저가 사용하기 조금 더 편안한 느낌을 줄 수 있다는 것을 배웠고, 반응형의 사이즈마다 어떤 식으로 정보들을 보여줄지 많은 고민을 했습니다. 그 결과 웹 사이즈가 작아질 때, flex-박스를 통해 보여주는 것보다 아래로 내려주어서 정보 전달에 조금 더 신경 쓰는 것들이 좋은 UI를 가진 다는 것을 앓게 되었습니다. 타입 스크립트를 사용하면서 useState, useRef 등 타입에 대해서 알게 되었고, 또 flexible 한 언어가 아니기 때문에 타입 가드를 사용하는 방법도 배웠습니다.",
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
    explanation:
      "카카오 지도 API의 주소를 통해 좌표를 얻어내는 기능과 좌표를 다시 지도로 표시해주는 2가지의 기능을 이용해 유저의 위치, 가게들의 위치를 지도의 표시하는 기능을 구현하였습니다. 이 기능을 통해 메인 화면에 유저의 주소 중심으로 가게가 어떤 것이 있는지 확인하는 기능을 구현하였습니다.",
    retrospect:
      "사이트를 배포한 후 데이터들을 불러오는 것에 대해 Aws의 비용이 많이드는 것을 확인하여, 리펙토링 기간을 가져 데이터의 흐름들을 다시 파악하고, Aws를 통해 데이터를 요청하는 횟수를 줄인 경험이 있습니다. 데이터 흐름을 줄여 하나의 상태에 관리가 됨으로써 유지 보수도 전보다 수월해진 경험을 했습니다.",
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
