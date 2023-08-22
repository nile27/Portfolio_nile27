import { useRecoilValue } from "recoil";
import { maxView } from "../atoms/viewMax";
import "../main.scss";

export default function Nav() {
  const view = useRecoilValue(maxView);

  return (
    <nav className="navigator">
      {view ? (
        <div className="tapBtn">
          <div className="hamburgerBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M17 1H1M17 6H1M17 11H1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="tapBtn-bar">
              <li className="navi_btn_800">Introduce</li>
              <li className="navi_btn_800">Skill</li>
              <li className="navi_btn_800">Education</li>
              <li className="navi_btn_800">Project</li>
              <li className="navi_btn_800">Studies</li>
              <li className="navi_btn_800">Price</li>
            </div>
          </div>
        </div>
      ) : (
        <ul className="navi_ul">
          <li className="navi_btn">Introduce</li>
          <li className="navi_btn">Skill</li>
          <li className="navi_btn">Education</li>
          <li className="navi_btn">Project</li>
          <li className="navi_btn">Studies</li>
          <li className="navi_btn">Price</li>
        </ul>
      )}
    </nav>
  );
}
