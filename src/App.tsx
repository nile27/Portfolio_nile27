import Nav from "./Pages/Navi";
import Header from "./Pages/Header";
import Introduce from "./Pages/Introduce";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Studies from "./Pages/Studies";
import Price from "./Pages/Price";
import Enlargement from "./Component/Img_Enlargement";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { maxView } from "./atoms/viewMax";
import { imgModal, isImgModal } from "./atoms/Price_Modal";

import "./main.scss";

function App() {
  const View: boolean = useMediaQuery({
    query: "(max-width:1000px)",
  });

  const [, setViewMax] = useRecoilState<boolean>(maxView);
  const imgModalState = useRecoilValue(imgModal);
  const isImgModalState = useRecoilValue(isImgModal);

  useEffect(() => {
    setViewMax(View);
  }, [View, setViewMax]);

  return (
    <>
      <Nav />
      <section className="body">
        <Header />
        <Introduce />
        <Skill />
        <Education />
        <Project />
        <Studies />
        <Price />
        {isImgModalState ? <Enlargement index={imgModalState} /> : null}
      </section>
    </>
  );
}

export default App;
