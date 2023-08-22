import Window from "../img/window32.svg";
import Git from "../img/uiw_github.svg";
import { projectArr } from "../data/Project-data";
import { useState, useRef, useEffect } from "react";

interface Idx {
  idx: number;
}

export default function Tap({ idx }: Idx) {
  const [count, setCount] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const leng: number = projectArr[idx].imgSrc.length - 1;
  const maxSwipe: number = projectArr[idx].imgSrc.length * 100;

  function scrollFunc() {
    if (count >= leng) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCount(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCount(count + 1);
    }
  }

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.width = `${leng + 1}10%`;
    }
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (100 / (leng + 1)) * count
      }%)`;
    }
  }, [count]);

  return (
    <>
      <div className="tap-head">
        <h1>{projectArr[idx].head}</h1>
        <span>{projectArr[idx].date}</span>
      </div>
      <div className="img-section">
        <div className="gifbox">
          <button className="left"></button>
          <div className="overflow-container">
            <div className="swipe-container" ref={slideRef}>
              {projectArr[idx].imgSrc.map((item, idx) => {
                return (
                  <div className="swipe" key={idx}>
                    <img src={item} alt={`${idx}`} />
                  </div>
                );
              })}
            </div>
          </div>
          <button className="right" onClick={scrollFunc}></button>
        </div>
      </div>
      <div className="site-intro-box">
        <div className="site-intro-head">
          <h1>사이트 소개</h1>
          <span>{projectArr[idx].member}</span>
        </div>
        <div className="site-intro">
          <span className="site-Highlight">{projectArr[idx].Highlight}</span>
          <ul className="site-explanation">
            {projectArr[idx].explanationList.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
          <div className="site-experience-box">
            <p>{projectArr[idx].explanation}</p>
          </div>
          <div className="site-experience-box">
            <p>{projectArr[idx].retrospect}</p>
          </div>
        </div>
        <div className="site-stack">
          {projectArr[idx].stack.map((item, idx) => {
            return <button key={idx}>{item}</button>;
          })}
        </div>
        <div className="site-Link">
          <a className="git" href={projectArr[idx].gitLink}>
            <img src={Git}></img>
            Github
          </a>
          <a className="site" href={projectArr[idx].siteLink}>
            배포 사이트
          </a>
        </div>
      </div>
    </>
  );
}
