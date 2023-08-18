import Tap from "../Component/Project_tap";
import { useState } from "react";

interface projectData {
  team: string;
  name: string;
  date: string;
}

export default function Project() {
  const projectArr: projectData[] = [
    {
      team: "Team",
      name: "Eaaaaaaats",
      date: "2023.05 ~ 2023.05",
    },
    {
      team: "Solo",
      name: "포트폴리오",
      date: "2023.08 ~ 2023.08",
    },
    {
      team: "Solo",
      name: "포트폴리오",
      date: "2023.08 ~ 2023.08",
    },
    {
      team: "Solo",
      name: "포트폴리오",
      date: "2023.08 ~ 2023.08",
    },
  ];
  const [isTap, setIsTap] = useState<boolean[]>(
    Array.from({ length: projectArr.length }, () => false)
  );
  const [tapIndex, setTapIndex] = useState<number>(0);

  function onClickFunc(idx: number) {
    let arr: boolean[] = [];
    isTap[idx]
      ? (arr = [...isTap])
      : (arr = Array.from({ length: projectArr.length }, () => false));

    arr[idx] = !arr[idx];
    console.log(arr);

    setIsTap(arr);
    setTapIndex(idx);
  }

  return (
    <div className="box">
      <div className="header">
        <h1 id="header">Project</h1>
      </div>
      <ul className="tap-box">
        {projectArr.map((item, idx) => {
          return (
            <li
              className={isTap[idx] ? "tap-li-box active" : "tap-li-box"}
              onMouseDown={() => onClickFunc(idx)}
              key={idx}
            >
              <span>{item.team}</span>
              <span>{item.name} </span>
              <span>{item.date}</span>
            </li>
          );
        })}
      </ul>
      <div className="tap-body-box">
        {isTap[tapIndex] ? <Tap idx={tapIndex} /> : null}
      </div>
    </div>
  );
}
