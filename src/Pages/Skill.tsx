import SkillModal from "../Component/Skill_modal";
import { useState } from "react";
import { scrollRef } from "../App";
export interface modalIndex {
  [anyKeyword: string]: boolean;
  front: boolean;
  etc: boolean;
}

export default function Skill({ content1Ref }: scrollRef) {
  const [isModal, setIsModal] = useState<modalIndex>({
    front: false,
    etc: false,
  });
  const [firstTouch, setTouch] = useState<boolean>(false);
  const [btnIndex, setBtn] = useState<string>("");

  function frontFunc(index: string) {
    for (let key in isModal) {
      if (key !== index) isModal[key] = false;
    }

    setIsModal({ ...isModal, [index]: !isModal[index] });
    setTouch(true);
    setBtn(index);
  }

  return (
    <article className="phone_box">
      <div
        className="column_box"
        ref={(el) =>
          content1Ref.current ? (content1Ref.current[1] = el) : null
        }
      >
        <div className="header">
          <h1 id="header">Skill</h1>
        </div>

        <div className="flex-center-box">
          <div className="frontDiv skill">
            <button
              className="skillBtn front"
              onClick={() => frontFunc("front")}
            >
              Front-End
            </button>
          </div>

          <button className="skillBtn Etc" onClick={() => frontFunc("etc")}>
            ETC
          </button>
        </div>

        {firstTouch ? (
          <SkillModal
            isModal={isModal}
            setIsModal={setIsModal}
            index={btnIndex}
          />
        ) : null}
      </div>
    </article>
  );
}
