import WM1 from "../img/WM/옆면.jpeg";
import WM2 from "../img/WM/수다미 내부.jpeg";
import WM3 from "../img/WM/수다미 설계.jpeg";
import WM4 from "../img/WM/수다미 정면.jpeg";

import { useState, useRef, useEffect } from "react";

interface isModal {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WMModal({ setIsModal }: isModal) {
  const imgArr: string[] = [WM1, WM2, WM3, WM4];
  const [count, setCount] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const leng: number = imgArr.length - 1;
  document.body.style.overflow = "hidden";

  function handler() {
    document.body.style.overflow = "unset";
    setIsModal(false);
  }

  function nextScrollFunc() {
    if (count >= leng + 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function prevScrollFunc() {
    if (count <= 0) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCount(leng + 1); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.width = `${leng + 2}00%`;
      slideRef.current.style.height = `${((leng * 100) / (leng / 3)) * 10}%`;
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (100 / (leng + 2)) * count
      }%)`;
    }
  }, [count, leng]);

  return (
    <>
      <div className="img-background" onClick={handler}></div>
      <div className="modal-div">
        <div className="img-head">
          <button onClick={handler}></button>
        </div>
        <div className="gifbox-modal">
          <button className="left" onClick={prevScrollFunc}></button>
          <div className="overflow-container">
            <div className="swipe-container" ref={slideRef}>
              <div className="swipe">
                <video src="/videos/시연영상.mp4" muted autoPlay loop />
              </div>
              {imgArr.map((item, idx) => {
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
    </>
  );
}
