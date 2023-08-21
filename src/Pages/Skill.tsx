import SkillModal from "../Component/Skill_modal";
import { useState } from "react";

export default function Skill() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [firstTouch, setTouch] = useState<boolean>(false);

  function frontFunc() {
    setIsModal(!isModal);
    setTouch(true);
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

        {firstTouch ? <SkillModal isModal={isModal} /> : null}
      </div>
    </article>
  );
}
