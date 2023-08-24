import Portfolio1 from "../img/Portfolio/portfolio1.gif";
import Portfolio2 from "../img/Portfolio/portfolio2.gif";
import Portfolio3 from "../img/Portfolio/portfolio3.gif";
import Portfolio4 from "../img/Portfolio/portfolio4.gif";

interface projectTap {
  head: string;
  date: string;
  imgSrc: string[];
  member: string;
  Highlight: string | null;
  explanationList: string[];
  explanation: string | null;
  retrospect: string;
  stack: string[];
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
    head: "Eaaaaaaats (맛집 탐색 사이트)",
    date: "2023.06 ~ 2023.06 (4주)",
    imgSrc: [
      "https://user-images.githubusercontent.com/118884127/240876205-8526ffcd-84a9-48aa-a49e-7f36252d5e2a.gif",
      "https://user-images.githubusercontent.com/118884127/240876213-8a1fc9cd-ac09-4efe-baf8-0c6035199baf.gif",
      "https://user-images.githubusercontent.com/118884127/240876933-3f0cd105-20ac-458f-a3d0-1364f8761a6f.gif",
      "https://user-images.githubusercontent.com/118884127/241071458-b5f47752-eb3e-4b9b-9f66-116f9a8cfbe1.gif",
      "https://user-images.githubusercontent.com/118884127/241071936-aa351fd5-eeac-41e6-9087-d1d51aa6f8a9.gif",
      "https://user-images.githubusercontent.com/118884127/240876217-5c013fea-5bd0-4ba5-aac5-d4278a1c3ab4.gif",
      "https://user-images.githubusercontent.com/118884127/241087793-ae4fc25a-293f-4ab3-941e-1993b27913cf.gif",
      "https://user-images.githubusercontent.com/118884127/241088286-99f4ff31-8496-489e-bb63-96388298cc00.gif",
    ],
    member: "Team: FE: 4명, BE: 3명",
    Highlight: `“점심은 뭐 먹지”, “한 끼를 먹어도 제대로 먹어야지”라는 고민, 맛집 탐방이 취미인 사용자들을 위한 맛집 탐색 사이트`,
    explanationList: [
      "사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.",
      "가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.",
      "리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.",
      "사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.",
    ],
    explanation:
      "처음으로 백엔드 분들과 협업한 사이트입니다. 데이터들의 타입,필터링(검색) 기능 등 데이터들을 받아 올 때 사용자에게 어떠한 방식으로 보여 줄지 많은 고민을 했었고, 사장님 계정, 일반 유저 계정 등 어떠한 데이터들을 보여 줄지 많은 회의를 통해 백엔드 개발자와의 의사소통이 얼마나 중요한지 느꼈습니다.",
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
    gitLink: "https://github.com/nile27/Eaaaaaaats_refectoring",
    siteLink: "http://main22.s3-website.ap-northeast-2.amazonaws.com/",
    FigmaLink: undefined,
  },

  {
    head: "Portfolio",
    date: "2023.08 ~ 2023.08 (2주)",
    imgSrc: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    member: "Solo",
    Highlight: `타입스크립트를 사용하여 제작한 개인 포트폴리오 반응형 웹 사이트입니다.`,
    explanationList: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
    ],
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
    gitLink: "https://github.com/nile27/Portfolio_nile27",
    siteLink: "https://nile27.github.io/",
    FigmaLink:
      "https://www.figma.com/file/g0fMpeE9IiQ8Ww1Vd37qBd/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(UI)?type=design&node-id=0-1&mode=design&t=oLZkiFIQhixAqGtt-0",
  },
];

export const projectHeadArr: projectData[] = [
  {
    team: "Team",
    name: "Eaaaaaaats",
    date: "2023.05 ~ 2023.05",
  },
  {
    team: "Solo",
    name: "포트폴리오",
    date: "2023.08 ~ 2023.08",
  },
];
