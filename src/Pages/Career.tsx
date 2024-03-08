import { maxView } from "../atoms/viewMax";
import { useRecoilValue } from "recoil";
import { scrollRef } from "../App";

import WM1 from "../img/WM/옆면.jpeg";
import WM2 from "../img/WM/수다미 내부.jpeg";
import WM3 from "../img/WM/수다미 설계.jpeg";
import WM4 from "../img/WM/수다미 정면.jpeg";

export default function Career({ content1Ref }: scrollRef) {
  const view = useRecoilValue(maxView);

  const imgArr: string[] = [WM1, WM2, WM3, WM4];
  return (
    <div
      className="box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[4] = el) : null)}
    >
      <div className="header">
        <h1 id="header">Career</h1>
      </div>
      <ul className="container">
        <li>
          <div className="career">
            <div className="head-box">
              {!view ? (
                <h2 id="career-header">WM - 개인 사업자</h2>
              ) : (
                <div>
                  <h3>2020.03 ~ 2021.03</h3>
                  <h2 id="career-header">WM - 개인 사업자</h2>
                </div>
              )}
            </div>

            <span className="career-date">2020.03 ~ 2021.03</span>
            <div className="career-flex-box">
              <div className="video-box">
                <span className="career-span">시제품 시연 영상</span>
                <video className="video" controls={true} muted>
                  <source
                    src="https://github.com/nile27/Portfolio_nile27/assets/114140840/ccf7f9e8-4001-4df8-91e2-820f8640dd1c"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
              <ol className="ol">
                <li>
                  중소벤처기업부 예비창업패키지 상기 사업 선정
                  <ul>
                    <li>담당 기간 : 2020년 3월 ~ 2020년 5월 (2개월)</li>
                    <li>
                      성과 내용 : 2020 중소벤처기업부 예비창업패키지에 상기
                      선정되어 약 4천만원 투자 지원금 수령
                    </li>
                  </ul>
                </li>

                <li>
                  시제품 제작 (외주 업체){" "}
                  <ul>
                    <li>담당 기간: 2020년 6월 ~ 2020년 12월 (6개월)</li>
                    <li>
                      성과 내용: 기존 프로젝트의 ProtoType 기반을 토대로 외주
                      업체를 통해 시제품 제작
                    </li>
                  </ul>
                </li>
                <li>
                  학생 창업유망팀 300 경진대회 300팀 최종 선정 - 2020.08
                  <ul>
                    <li>담당 기간: 2020년 7월 ~ 2020년 8월 (2개월)</li>
                    <li>
                      성과 내용: 학생창업 경진대회 "학생 창업 유망팀 300"에서
                      최종 300팀에 선정
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="img-box">
              <h1 className="career-span">시제품</h1>
              <div className="container_ul">
                <ul className="price-list-box">
                  {imgArr.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <img src={item} alt={`${item}`} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
