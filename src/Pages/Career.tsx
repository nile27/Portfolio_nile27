import { maxView } from "../atoms/viewMax";
import { useRecoilValue } from "recoil";
import { scrollRef } from "../App";
import { useState } from "react";
import WMModal from "./WM_modal";
export default function Career({ content1Ref }: scrollRef) {
  const view = useRecoilValue(maxView);
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div
      className="box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[3] = el) : null)}
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

              <button
                onClick={() => {
                  setIsModal(!isModal);
                }}
              >
                시제품
              </button>
            </div>
            {isModal ? <WMModal setIsModal={setIsModal} /> : null}
            <span className="career-date">2020.03 ~ 2021.03</span>
            <ol className="ol">
              <li>WM 경영 및 대표, 시제품 담당</li>
              <li>2020 중소벤처기업부 예비창업패키지 선정</li>
              <li>시제품 제작 (외주 업체) </li>
              <li>학생 창업유망팀 300 경진대회 300팀 최종 선정 - 2020.08</li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  );
}
