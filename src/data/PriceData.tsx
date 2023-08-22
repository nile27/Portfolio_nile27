import WM from "../img/Price/2020 예비창업패키지 선정 인증서.jpg";
import graduate from "../img/Price/졸업 작품.jpeg";
import CAP_300 from "../img/Price/CAP_창업300.jpeg";
import HSV from "../img/Price/HSV.jpg";
import WM_300 from "../img/Price/WM_창엄300.jpeg";
import capston from "../img/Price/WM_캡스톤 장려상.jpeg";
import WTA from "../img/Price/WTA.jpeg";

interface price {
  img: string;
  name: string;
  date: string;
  mainfrom: string;
  from: string | null;
}

export const Pricearr: price[] = [
  {
    img: CAP_300,
    name: "학생 창업유망팀 300 경진대회 300팀 최종 선정",
    date: "2019.08",
    mainfrom: "주최: 교육부, 과학기술정보 통신부",
    from: "주관: 한국연구재단, 한국청년기업가정신 재단",
  },
  {
    img: WTA,
    name: "WTA 대전 하이테크 페어 아이디어 공모전 장려상",
    date: "2019.10",
    mainfrom: "주최,주관: 대전광역시, 세계과학도시연합",
    from: null,
  },
  {
    img: HSV,
    name: "2019 Hannam Star Venture 상상창업경진대회 최우수상",
    date: "2019.12",
    mainfrom: "주최,주관: 한남대학교, 한남대 창업지원단",
    from: null,
  },
  {
    img: capston,
    name: "2019 산학협력 페스티벌 캡스톤 디자인 경진대회 장려상",
    date: "2019.12",
    mainfrom: "주최,주관: 한남대학교, 한남대 창업지원단",
    from: null,
  },
  {
    img: WM,
    name: "2020 중소벤처기업부 예비창업패키지 선정",
    date: "2020.05",
    mainfrom: "주최,주관: 창업진흥원, 중소벤처기업부",
    from: "주관:전창조경제혁신센터",
  },
  {
    img: WM_300,
    name: "학생 창업유망팀 300 경진대회 300팀 최종 선정",
    date: "2020.08",
    mainfrom: "주최: 교육부, 과학기술정보 통신부",
    from: "주관: 한국연구재단, 한국청년기업가정신 재단",
  },
  {
    img: graduate,
    name: "2022 컴퓨터공학과 학술제 장려상",
    date: "2022.06",
    mainfrom: "주최: 한남대학교",
    from: "주관: 컴퓨터 공학과",
  },
];
