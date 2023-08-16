import Nav from "./Pages/Navi";
import Header from "./Pages/Header";
import Introduce from "./Pages/Introduce";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { maxView } from "./atoms/viewMax";
import "./main.scss";

function App() {
  const View: boolean = useMediaQuery({
    query: "(max-width:900px)",
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
      </section>
    </>
  );
}

export default App;
