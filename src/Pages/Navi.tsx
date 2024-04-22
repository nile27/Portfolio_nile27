import { useRecoilValue } from "recoil";
import { useRef } from "react";
import { maxView } from "../atoms/viewMax";
import { scrollRef } from "../App";
import topBtn from "../img/topBtn.svg";
import "../main.scss";

interface Menu {
  [key: string]: number;
}

export default function Nav({ content1Ref }: scrollRef) {
  const view = useRecoilValue(maxView);
  const naviScroll = useRef<HTMLUListElement>(null);

  const menuArr = [
    "Contact",
    "Introduce",
    "Skill",
    "Project",

    "Price",
    "Education",
  ];

  function scrollFunc(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
    const event: HTMLElement = e.target as HTMLElement;
    const name: string = event.innerHTML;
    const menu: Menu = {
      Contact: 0,
      Introduce: 1,
      Skill: 2,
      Project: 3,
      Price: 4,
      Education: 5,
    };

    if (content1Ref.current) {
      content1Ref.current[menu[name]]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

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
              {menuArr.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="navi_btn_800"
                    onClick={(e) => scrollFunc(e)}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <ul className="navi_ul" ref={naviScroll}>
          {menuArr.map((item, idx) => {
            return (
              <li key={idx} className="navi_btn" onClick={(e) => scrollFunc(e)}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <button className="topBTN" onClick={() => window.scrollTo(0, 0)}>
        <img src={topBtn} alt="topbtn"></img>
      </button>
    </nav>
  );
}
