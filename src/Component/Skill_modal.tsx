// skill-front

import { modalIndex } from "../Pages/Skill";
import { srcArr, frontArr, etcArr, etcIntroArr } from "../data/Front-end";
import { useState, useEffect } from "react";

interface ismodal {
  isModal: modalIndex;
  setIsModal: React.Dispatch<React.SetStateAction<modalIndex>>;
  index: string;
}

export default function SkillModal({ isModal, setIsModal, index }: ismodal) {
  const [skillModal, setSkillModal] = useState<number>(0);
  let imgArr: string[] = index === "front" ? srcArr : etcArr;
  let introArr: string[] = index === "front" ? frontArr : etcIntroArr;

  useEffect(() => {
    if (index === "front") {
      imgArr = srcArr;
      introArr = frontArr;
    } else {
      imgArr = etcArr;
      introArr = etcIntroArr;
    }
  }, []);

  return (
    <>
      <div className={isModal[index] ? "modal_box" : "modal_out"}>
        <div className="modal_head">
          <button
            onClick={() => setIsModal({ ...isModal, [index]: false })}
          ></button>
        </div>
        <div className="modal-body-box">
          <ul className="modal-icon-box">
            {imgArr.map((item, idx) => {
              return (
                <li key={idx}>
                  <img
                    src={item}
                    alt={`${item}`}
                    onMouseOver={() => setSkillModal(idx + 1)}
                  />
                </li>
              );
            })}
          </ul>
          <div className="skill-intro-box">
            <span>{introArr[skillModal]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
