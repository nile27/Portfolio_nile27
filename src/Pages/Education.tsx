export default function Education() {
  return (
    <>
      <div className="header">
        <h1 id="header">Education</h1>
      </div>
      <ul className="container">
        <li>
          <div className="date">
            <span>2015.03 ~ 2022.08</span>
          </div>
          <div className="career">
            <div className="head-box">
              <h2 id="career-header">한남대학교</h2>
              <button
                onClick={() => {
                  window.scrollTo(0, 10000);
                }}
              >
                수상 링크
              </button>
            </div>

            <ol>
              <li>컴퓨터통신무인기술학과 (컴퓨터 전공)</li>
              <li>
                Hannam Design Factory (2019.03 ~ 2020.06)
                <ul>
                  <li>
                    다양한 학과들이 모여 한 가지의 문제점을 해결할 수 있는
                    ProtoType을 제작하는 교내 학점 프로젝트
                  </li>
                  <li>
                    디자인 전공, 경영학 전공, 기계공학 전공, 컴퓨터 전공 등
                  </li>
                </ul>
              </li>
              <li>
                C.A.P (반려동물 구강 건강 장난감)
                <ul>
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
                  <li>아이디어 개발 담당 (총 7명)</li>
                  <li>Hannam Star Venture 상상창업 경진대회 최우수상</li>
                </ul>
              </li>

              <li>
                1인 가구 원격 IoT 시스템
                <ul>
                  <li>Arduino 개발 담당</li>
                  <li>2022 컴퓨터공학과 학술제 장려상</li>
                </ul>
              </li>
            </ol>
          </div>
        </li>

        <li>
          <div className="date">
            <span>2022.12 ~ 2023.06</span>
          </div>
          <div className="career">
            <div className="head-box">
              <h2 id="career-header">코드스테이츠</h2>
            </div>
            <ol>
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
    </>
  );
}
