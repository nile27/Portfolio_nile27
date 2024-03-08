import Nav from "./Pages/Navi";
import Contact from "./Pages/Contact";
import Introduce from "./Pages/Introduce";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Price from "./Pages/Price";
import Career from "./Pages/Career";
import Enlargement from "./Component/Img_Enlargement";
import { projectArr } from "./data/Project-data";

import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { maxView } from "./atoms/viewMax";
import { imgModal, isImgModal } from "./atoms/Price_Modal";

import "./main.scss";

export interface scrollRef {
  content1Ref: React.RefObject<null[] | HTMLDivElement[] | HTMLHeadElement[]>;
}

function App() {
  const content1Ref = useRef<null[] | HTMLDivElement[]>([]);
  const View: boolean = useMediaQuery({
    query: "(max-width:1100px)",
  });

  const [, setViewMax] = useRecoilState<boolean>(maxView);
  const imgModalState = useRecoilValue(imgModal);
  const isImgModalState = useRecoilValue(isImgModal);

  function preload() {
    let img = [];
    for (let project of projectArr) {
      for (let i = 0; i < project.imgSrc.length; i++) {
        img[i] = new Image();
        img[i].src = project.imgSrc[i];
      }
    }
  }

  useEffect(() => {
    setViewMax(View);
  }, [View, setViewMax]);

  useLayoutEffect(() => {
    preload();
  }, []);

  return (
    <div className="rootBox">
      <section className="body">
        <Contact content1Ref={content1Ref} />
        <Introduce content1Ref={content1Ref} />
        <Skill content1Ref={content1Ref} />
        <Project content1Ref={content1Ref} />
        <Career content1Ref={content1Ref} />
        <Price content1Ref={content1Ref} />
        <Education content1Ref={content1Ref} />
      </section>
      {isImgModalState ? <Enlargement index={imgModalState} /> : null}
      <section className="navigator-bar">
        <Nav content1Ref={content1Ref} />
      </section>
    </div>
  );
}

export default App;
