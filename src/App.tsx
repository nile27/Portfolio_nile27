import Nav from "./Pages/Navi";
import Header from "./Pages/Header";
import Introduce from "./Pages/Introduce";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Studies from "./Pages/Studies";
import Price from "./Pages/Price";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { maxView } from "./atoms/viewMax";
import "./main.scss";

function App() {
  const View: boolean = useMediaQuery({
    query: "(max-width:1000px)",
  });
  const [, setViewMax] = useRecoilState<boolean>(maxView);

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
      </section>
    </>
  );
}

export default App;
