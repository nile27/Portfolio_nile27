import Window from "../img/window32.svg";
import { useEffect } from "react";
import Git from "../img/uiw_github.svg";

interface Idx {
  idx: number;
}

export default function Tap(idx: Idx) {
  return (
    <>
      <div className="tap-head">
        <h1>Eaaaaaaats (맛집 탐색 사이트)</h1>
        <span>2023.06 ~ 2023.06 (4주)</span>
      </div>
      <div className="img-section">
        <img className="window" src={Window} alt="window"></img>
        <div className="gifbox">
          <button className="left"></button>
          <img src="https://user-images.githubusercontent.com/118884127/240876205-8526ffcd-84a9-48aa-a49e-7f36252d5e2a.gif"></img>
          <button className="right"></button>
        </div>
      </div>
      <div className="site-intro-box">
        <div className="site-intro-head">
          <h1>사이트 소개</h1>
          <span>Team: FE: 4명, BE: 3명</span>
        </div>
        <div className="site-intro">
          <span className="site-Highlight">
            “점심은 뭐 먹지”, “한 끼를 먹어도 제대로 먹어야지”라는 고민, 맛집
            탐방이 취미인 사용자들을 위한 맛집 탐색 사이트
          </span>
          <ul className="site-explanation">
            <li>사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.</li>
            <li>가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.</li>
            <li>리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.</li>
            <li>
              사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.
            </li>
          </ul>
          <div className="site-experience-box">
            <p>
              처음으로 백엔드 분들과 협업한 사이트입니다. 데이터들의 타입,
              필터링(검색) 기능 등 데이터들을 받아 올 때 사용자에게 어떠한
              방식으로 보여 줄지 많은 고민을 했었고, 사장님 계정, 일반 유저 계정
              등 어떠한 데이터들을 보여 줄지 많은 회의를 통해 백엔드 개발자와의
              의사소통이 얼마나 중요한지 느꼈습니다.
            </p>
          </div>
          <div className="site-experience-box">
            <p>
              사이트를 배포한 후 데이터들을 불러오는 것에 대해 Aws의 비용이 많이
              드는 것을 확인하여, 리펙토링 기간을 가져 데이터의 흐름들을 다시
              파악하고, Aws를 통해 데이터를 요청하는 횟수를 줄인 경험이
              있습니다. 데이터 흐름을 줄여 하나의 상태에 관리가 됨으로써 유지
              보수도 전보다 수월해진 경험을 했습니다.
            </p>
          </div>
        </div>
        <div className="site-stack">
          <button>React</button>
        </div>
        <div className="site-Link">
          <button className="git">
            <img src={Git}></img>
            Github
          </button>
          <button className="site">배포 사이트</button>
        </div>
      </div>
    </>
  );
}
