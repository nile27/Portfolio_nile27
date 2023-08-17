import SkillModal from "../Component/Skill_modal";
import { useRef, useState } from "react";

export default function Skill() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function frontFunc(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsModal(!isModal);

    window.scrollTo(0, 1200);
  }

  return (
    <article className="phone_box">
      <div className="column_box">
        <div className="header">
          <h1 id="header">Skill</h1>
        </div>

        <div className="flex-center-box">
          <div className="frontDiv skill">
            <button className="skillBtn front" onClick={frontFunc}>
              Front-End
            </button>
          </div>

          <button className="skillBtn Etc">ETC</button>
        </div>
        {isModal ? (
          <div ref={contentRef} className="modal">
            <SkillModal isModal={isModal} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
