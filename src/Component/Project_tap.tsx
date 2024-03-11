import Git from "../img/uiw_github.svg";
import { projectArr } from "../data/Project-data";
import { useState, useRef, useEffect } from "react";

interface Idx {
  idx: number;
}
interface projectTap {
  head: string;
  date: string;
  imgSrc: string[];
  member: string;
  Highlight: string | null;
  explanationList: string[];
  testEmail: string | null;
  testPw: string | null;
  explanation: string[];
  retrospect: string;
  stack: string[];
  etcStack: string[] | undefined;
  gitLink: string;
  siteLink: string;
  FigmaLink: string | undefined;
}

export default function Tap({ idx }: Idx) {
  const [count, setCount] = useState<number>(0);
  const arr: projectTap = projectArr[idx];
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
        <h1>{arr.head}</h1>
        <span>{arr.date}</span>
      </div>
      <div className="img-section">
        <div className="gifbox">
          <button className="left" onClick={prevScrollFunc}></button>
          <div className="overflow-container">
            <div className="swipe-container" ref={slideRef}>
              {arr.imgSrc.map((item, idx) => {
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
        {arr.imgSrc.map((_, idx) => {
          return count === idx ? (
            <button className="select" key={idx}></button>
          ) : (
            <button className="normal" key={idx}></button>
          );
        })}
      </div>
      <div className="site-intro-box">
        <div className="site-intro-head">
          <h1>사이트 주요 기능</h1>
          <span>{arr.member}</span>
        </div>
        {arr.testEmail ? (
          <ul className="test-email">
            <h1>테스트 계정</h1>
            <li>{arr.testEmail}</li>
            <li>{arr.testPw}</li>
          </ul>
        ) : null}
        <div className="site-intro">
          <span className="site-Highlight">{arr.Highlight}</span>
          <ul className="site-explanation">
            {arr.explanationList.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
          <h1 className="site-H1">프로젝트 소개</h1>
          <div className="site-experience-box">
            {arr.explanation.map((item: string) => {
              return (
                <>
                  <p>{item}</p>
                  <br />
                </>
              );
            })}
          </div>
          <div className="site-experience-box">
            <p>{arr.retrospect}</p>
          </div>
        </div>
        <div className="site-stack">
          {arr.stack.map((item, idx) => {
            return <button key={idx}>{item}</button>;
          })}
        </div>
        {arr.etcStack !== undefined ? (
          <div className="site-stack">
            {arr.etcStack.map((item, idx) => {
              return <button key={idx}>{item}</button>;
            })}
          </div>
        ) : null}

        <div className="site-Link">
          <a
            className="git"
            href={arr.gitLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="git-icon"></img>
            Github
          </a>
          <a
            className="site"
            href={arr.siteLink}
            target="_blank"
            rel="noreferrer"
          >
            배포 사이트
          </a>
          {arr.FigmaLink ? (
            <a
              className="Figma"
              href={arr.FigmaLink}
              target="_blank"
              rel="noreferrer"
            >
              Figma (초기 디자인)
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
