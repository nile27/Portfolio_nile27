import Ellipse from "../img/profile.jpeg";
import { IntroArr } from "../data/Introduce-data";
import { scrollRef } from "../App";

export default function Introduce({ content1Ref }: scrollRef) {
  return (
    <article className="phone_box">
      <div
        className="column_box"
        ref={(el) =>
          content1Ref.current ? (content1Ref.current[0] = el) : null
        }
      >
        <div className="header">
          <h1 id="header"> Introduce</h1>
        </div>

        <div className="flex_box">
          <img className="profile" src={Ellipse} alt="profile" />
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
