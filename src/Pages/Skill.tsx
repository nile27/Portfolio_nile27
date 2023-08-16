import SkillModal from "../Component/Skill_modal";
import { useState } from "react";

interface modal {
  front: boolean;
  etc: boolean;
}

export default function Skill() {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <article className="phone_box">
      <div className="column_box">
        <div className="header">
          <h1 id="header">Skill</h1>
        </div>

        <div className="flex-center-box">
          <button className="skillBtn" onClick={() => setIsModal(!isModal)}>
            Front-End
          </button>
          <button className="skillBtn">ETC</button>
        </div>
        <>
          {isModal ? (
            <>
              <SkillModal />
            </>
          ) : (
            <div className="fade-out"></div>
          )}
        </>
      </div>
    </article>
  );
}
