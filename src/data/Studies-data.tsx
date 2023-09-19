interface StudiesObj {
  id: number;
  date: string;
  finish: string;
  name: string;
  subname: string;
  Link: string | null;
  list: string[];
}

export const arr: StudiesObj[] = [
  {
    id: 1,
    date: "2023.01",
    finish: "2023.04",
    name: "그알티",
    subname: "JavaScript _ 알고리즘 스터디",
    Link: "https://github.com/nincoding/algorithm-study/tree/main/nile27",
    list: [
      "매주 자신이 풀었던 자바스크립트 알고리즘 문제에 대해 설명하고 코드 리뷰를 갖는 스터디",
      "주 1회 코드 리뷰",

      "스터디원: 8명 - 문제 개수: 41개",
    ],
  },
  {
    id: 2,
    date: "2023.06",
    finish: "2023.08",
    name: "스떠디 ",
    subname: "JavaScript _ 알고리즘 스터디",
    Link: "https://github.com/nile27/algorithm",
    list: [
      "백준의 “바킹독” 오픈 문제집 풀이 스터디 (매주 5문제)",
      "주 1회 코드 리뷰",
      "바킹독에 주제가 없을 경우 프로그래머스에서 문제로 대처",
      "스터디원: 8명 - 문제 개수: 42개",
    ],
  },
  {
    id: 3,
    date: "2023.07",
    finish: "2023.07",
    name: "타입스크립트 입문 - 기초부터 실전까지",
    subname: "인프런 영상 강의",
    Link: null,
    list: ["타입 스크립트 기초 문법 및 실습"],
  },
  {
    id: 4,
    date: `2023.09`,
    finish: "진행 중",
    name: "실전 프로젝트로 배우는 타입스크립트",
    subname: "인프런 영상 강의",
    Link: null,
    list: ["실전 프로젝트를 통해 타입스크립트를 직접 적용 및 실습"],
  },
  {
    id: 5,
    date: `2022.11 `,
    finish: "진행 중",
    name: "프로그래머스",
    subname: "코딩테스트 준비 (JavaScript)",
    Link: null,
    list: ["JavaScript 기반 알고리즘 문제 풀이", "스킬 체크 - Lv.2"],
  },
];
