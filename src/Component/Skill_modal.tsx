import Javascript from "../img/Skill_front/devicon_javascript.svg";
import HTML from "../img/Skill_front/logos_html-5.svg";
import CSS3 from "../img/Skill_front/logos_css-3.svg";
import ReactLogo from "../img/Skill_front/logos_react.svg";
import StyledComponent from "../img/Skill_front/skill-icons_styledcomponents.svg";
import Recoil from "../img/Skill_front/simple-icons_recoil.svg";
import axios from "../img/Skill_front/devicon-plain_axios-wordmark.svg";
import Typescript from "../img/Skill_front/devicon_typescript.svg";
import SCSS from "../img/Skill_front/vscode-icons_file-type-scss.svg";

import { useEffect, useState } from "react";

interface ismodal {
  isModal: boolean;
}

export default function SkillModal(isModal: ismodal) {
  const srcArr: string[] = [
    Javascript,
    HTML,
    CSS3,
    ReactLogo,
    StyledComponent,
    Recoil,
    axios,
    Typescript,
    SCSS,
  ];

  const [skillModal, setSkillModal] = useState(false);

  function skillModalFunc(isModal: boolean) {}

  useEffect(() => {
    if (!isModal) {
      setTimeout(() => {});
    }
  }, [isModal]);

  return (
    <div className="modal_background">
      <div className="modal_box">
        <div className="modal_head">
          <button></button>
        </div>
        <ul className="modal-body-box">
          {srcArr.map((item, idx) => {
            return (
              <li>
                <img key={idx} src={item} alt={`${item}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
