interface StudiesObj {
  id: number;
  date: string;
  finish: string;
  name: string;
  Link: string | null;
  list: string[];
}

export const arr: StudiesObj[] = [
  {
    id: 1,
    date: "2023.01",
    finish: "2023.04",
    name: "그알티 (JavaScript _ 알고리즘 스터디)",
    Link: "https://github.com/nincoding/algorithm-study/tree/main/nile27",
    list: [
      "매주 자신이 풀었던 자바스크립트 알고리즘 문제에 대해 설명하고 코드 리뷰를 갖는 스터디",
      "주 1회 회의 진행",
    ],
  },
  {
    id: 2,
    date: "2023.06",
    finish: "2023.08",
    name: "스떠디 (JavaScript _ 알고리즘 스터디)",
    Link: "https://github.com/nile27/algorithm",
    list: [
      "백준 그룹을 통해 매주 알고리즘을 주제를 정하여 풀고 각자 코드 리뷰를 갖는 스터디 (주제 우측 표에 난이도 별로 지정)",
      "백준의 “바킹독”  오픈 문제집 풀이 스터디",
      "바킹독에 주제가 없을 경우 프로그래머스에서 문제로 대처",
    ],
  },
  {
    id: 3,
    date: "2023.07",
    finish: "2023.07",
    name: "타입스크립트 입문 - 기초부터 실전까지",
    Link: null,
    list: ["타입 스크립트 기초 문법 및 실습"],
  },
  {
    id: 4,
    date: `2022.11 `,
    finish: "진행 중",
    name: "프로그래머스 - 코딩테스트(JavaScript)",
    Link: null,
    list: ["JavaScript 기반 알고리즘 문제 풀이", "스킬 체크 - Lv.2"],
  },
];
