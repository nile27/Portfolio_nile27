import Ellipse from "../img/profile.jpeg";
import { IntroArr } from "../data/Introduce-data";
import { scrollRef } from "../App";

export default function Introduce({ content1Ref }: scrollRef) {
  return (
    <article
      className="phone_box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[1] = el) : null)}
    >
      <div className="column_box">
        <div className="header">
          <h1 id="header"> Introduce</h1>
        </div>

        <div className="flex_box">
          <div className="profile">
            <img src={Ellipse} alt="profile" />
            <span>한남대학교 - 졸업</span>
            <span>컴퓨터통신무인기술학과 (컴퓨터 트랙)</span>
          </div>

          <div className="intro_box">
            <div className="intro_head">
              <h1>도전을 좋아하는 개발자 임민규입니다.</h1>
            </div>
            <ul className="intro_span">
              {IntroArr.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
