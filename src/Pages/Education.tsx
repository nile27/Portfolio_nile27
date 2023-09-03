import { maxView } from "../atoms/viewMax";
import { useRecoilValue } from "recoil";
import { scrollRef } from "../App";
import { useState } from "react";
import WMModal from "./WM_modal";
export default function Education({ content1Ref }: scrollRef) {
  const view = useRecoilValue(maxView);
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div
      className="box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[2] = el) : null)}
    >
      <div className="header">
        <h1 id="header">Education</h1>
      </div>
      <ul className="container">
        <li>
          {!view ? (
            <div className="date">
              <span>2015.03 ~ 2022.08</span>
            </div>
          ) : null}
          <div className="career">
            <div className="head-box">
              {!view ? (
                <h2 id="career-header">한남대학교</h2>
              ) : (
                <div>
                  <h3>2015.03 ~ 2022.08</h3>
                  <h2 id="career-header">한남대학교 </h2>
                </div>
              )}

              <button
                onClick={() => {
                  window.scrollTo(0, 10000);
                }}
              >
                수상 링크
              </button>
            </div>

            <ol className="ol">
              <li>컴퓨터통신무인기술학과 (컴퓨터 전공)</li>
              <li>
                Hannam Design Factory (2019.03 ~ 2020.06)
                <ul>
                  <li>
                    다양한 학과들이 모여 한 가지의 문제점을 해결할 수 있는
                    ProtoType을 제작하는 교내 학점 프로젝트
                  </li>
                  <li>팀 명: C.A.P, WM</li>
                  <li>
                    디자인 전공, 경영학 전공, 기계공학 전공, 컴퓨터 전공 등
                  </li>
                </ul>
              </li>
              <li>
                C.A.P (반려동물 구강 건강 장난감)
                <ul>
                  <li>
                    반려견과 줄다리기 놀이를 통해 반려견의 구강에서 나는 구취를
                    통해 구강 건강 상태를 확인
                  </li>
                  <li>Arduino 개발 담당 및 팀장</li>
                  <li>
                    학생 창업유망팀 300 경진 대회 300팀 최종 선정 - 2019.08
                  </li>
                  <li>
                    WTA(대전 하이테크 페어 아디이어) 공모전 장려상 - 2019.10
                  </li>
                </ul>
              </li>

              <li>
                WM (물 절약 플랫폼)
                <ul>
                  <li>
                    물의 사용량에 따라 불빛으로 물을 평균보다 얼마나 더
                    사용하는지 알려주어 사용자에게 물의 사용량의 인식을 주어
                    물을 절약하는 제품
                  </li>
                  <li>Arduino & 앱 인벤터 개발 담당 및 부팀장 (총 7명)</li>
                  <li>K-Water 산학 협력 캡스톤</li>
                  <li>
                    교내 산학 협력 페스티벌 캡스톤 디자인 경진대회 장려상 -
                    2019.12
                  </li>
                </ul>
              </li>

              <li>
                WM (Al - Jeo: 부유형 녹조 제거기)
                <ul>
                  <li>
                    수면 위를 떠다니며 녹조를 빨아드려 필터로 걸러내는 제품
                  </li>
                  <li>아이디어 개발 담당 (총 7명)</li>
                  <li>Hannam Star Venture 상상창업 경진대회 최우수상</li>
                </ul>
              </li>

              <li>
                1인 가구 원격 IoT 시스템
                <ul>
                  <li>
                    앱을 이용하여, 집 안의 가스, 전등, 전기(콘센트) 등을 확인 및
                    전원 제어를 하는 제품
                  </li>
                  <li>Arduino 개발 담당</li>
                  <li>2022 컴퓨터공학과 학술제 장려상</li>
                </ul>
              </li>
            </ol>
          </div>
        </li>

        <li>
          {!view ? (
            <div className="date">
              <span>2020.03 ~ 2021.03</span>
            </div>
          ) : null}
          <div className="career">
            <div className="head-box">
              {!view ? (
                <h2 id="career-header">WM (물 절약 플랫폼 - 개인 사업자)</h2>
              ) : (
                <div>
                  <h3>2020.03 ~ 2021.03</h3>
                  <h2 id="career-header">WM (물 절약 플랫폼 - 개인 사업자)</h2>
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
            <ol className="ol">
              <li>WM 경영 및 대표, 시제품 담당</li>
              <li>2020 중소벤처기업부 예비창업패키지 선정</li>
              <li>시제품 제작 (외주 업체) </li>
              <li>학생 창업유망팀 300 경진대회 300팀 최종 선정 - 2020.08</li>
            </ol>
          </div>
        </li>

        <li>
          {!view ? (
            <div className="date">
              <span>2022.12 ~ 2023.06</span>
            </div>
          ) : null}
          <div className="career">
            <div className="head-box">
              {!view ? (
                <h2 id="career-header">코드스테이츠</h2>
              ) : (
                <div>
                  <h3>2022.12 ~ 2023.06</h3>
                  <h2 id="career-header">코드스테이츠</h2>
                </div>
              )}
            </div>
            <ol className="ol">
              <li>JavaScript 기반 프론트 엔드 과정</li>
              <li>HTML5 / CSS3를 이용한 웹 개발</li>
              <li>React 프레임워크를 통한 웹 개발</li>
              <li>약 200개 정도의 알고리즘 문제 풀이</li>
              <li>매일 과제 수행 및 페어 시스템을 통한 코드 리뷰</li>
              <li>
                협업 프로젝트 2회 진행
                <ul>
                  <li>Main - Project : 맛집 탐색 사이트</li>
                  <li>Pre-Project : 스택 오버플로우 클론</li>
                </ul>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  );
}
