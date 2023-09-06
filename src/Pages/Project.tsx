import Tap from "../Component/Project_tap";
import { useState } from "react";
import { projectHeadArr } from "../data/Project-data";
import { scrollRef } from "../App";

export default function Project({ content1Ref }: scrollRef) {
  const [isTap, setIsTap] = useState<boolean[]>([true, false]);
  const [tapIndex, setTapIndex] = useState<number>(0);

  function onClickFunc(idx: number) {
    let arr: boolean[] = [];
    isTap[idx]
      ? (arr = [...isTap])
      : (arr = Array.from({ length: projectHeadArr.length }, () => false));

    arr[idx] = !arr[idx];

    setIsTap(arr);
    setTapIndex(idx);
  }

  return (
    <div
      className="box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[6] = el) : null)}
    >
      <div className="header">
        <h1 id="header">Project</h1>
      </div>
      <ul className="tap-box">
        {projectHeadArr.map((item, idx) => {
          return (
            <li
              className={isTap[idx] ? "tap-li-box active" : "tap-li-box"}
              onClick={() => onClickFunc(idx)}
              key={idx}
            >
              <span>{item.team}</span>
              <span>{item.name} </span>
              <span>{item.date}</span>
            </li>
          );
        })}
      </ul>

      {isTap[tapIndex] ? (
        <div className="tap-body-box">
          <Tap idx={tapIndex} />
        </div>
      ) : null}
    </div>
  );
}
