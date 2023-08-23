import Ellipse from "../img/Ellipse 2.png";
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
          <img src={Ellipse} alt="profile" />
          <div className="intro_box">
            <div className="intro_head">
              <h1>도전을 좋아하는 개발자 임민규입니다.</h1>
            </div>
            <ul className="intro_span">
              <li>
                <span>
                  대학교를 다니며, 문제들을 해결하기 위한 아이디어 및 프로토
                  타입 제작 경험이 다수 있습니다.
                </span>
              </li>
              <li>
                <span>프로젝트의 팀장 역할을 다수 경험하였습니다.</span>
              </li>
              <li>
                <span>React를 사용하여 개발한 경험이 있습니다.</span>
              </li>
              <li>
                <span>Kakao Map Open API를 사용항 경험이 있습니다.</span>
              </li>
              <li>
                <span>AWS의 S3를 통해 배포한 경험이 있습니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
