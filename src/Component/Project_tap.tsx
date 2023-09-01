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
  let [firstIdx, setFirstIdx] = useState<number>(0);

  function nextScrollFunc() {
    if (count >= leng) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCount(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCount(count + 1);
    }
  }

  function prevScrollFunc() {
    if (count <= 0) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCount(leng); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (slideRef.current && firstIdx === idx) {
      slideRef.current.style.width = `${leng + 1}00%`;
      slideRef.current.style.height = `${((leng * 100) / (leng / 3)) * 10}%`;
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (100 / (leng + 1)) * count
      }%)`;
    } else if (slideRef.current && firstIdx !== idx) {
      slideRef.current.style.transform = `translateX(-${0}%)`;
      slideRef.current.style.transition = "all 0s ease-in-out";
      setFirstIdx(idx);
      setCount(0);
    }
  }, [count, leng, firstIdx, idx]);

  return (
    <>
      <div className="tap-head">
        <h1>{projectArr[idx].head}</h1>
        <span>{projectArr[idx].date}</span>
      </div>
      <div className="img-section">
        <div className="gifbox">
          <button className="left" onClick={prevScrollFunc}></button>
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
          <button className="right" onClick={nextScrollFunc}></button>
        </div>
      </div>
      <div className="img-number-box">
        {projectArr[idx].imgSrc.map((_, idx) => {
          return count === idx ? (
            <button className="select" key={idx}></button>
          ) : (
            <button className="normal" key={idx}></button>
          );
        })}
      </div>
      <div className="site-intro-box">
        <div className="site-intro-head">
          <h1>사이트 소개</h1>
          <span>{projectArr[idx].member}</span>
        </div>
        {projectArr[idx].testEmail ? (
          <ul className="test-email">
            <h1>테스트 계정</h1>
            <li>{projectArr[idx].testEmail}</li>
            <li>{projectArr[idx].testPw}</li>
          </ul>
        ) : null}
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
            <img src={Git} alt="git-icon"></img>
            Github
          </a>
          <a className="site" href={projectArr[idx].siteLink}>
            배포 사이트
          </a>
          {projectArr[idx].FigmaLink ? (
            <a className="Figma" href={projectArr[idx].FigmaLink}>
              Figma (초기 디자인)
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
