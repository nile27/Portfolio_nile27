import React from "react";
import Nav from "./Pages/navi";
import Header from "./Pages/header";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { maxView } from "./atoms/viewMax";
import "./main.scss";

function App() {
  const View: boolean = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [_, setViewMax] = useRecoilState<boolean>(maxView);

  useEffect(() => {
    setViewMax(View);
  }, [View, setViewMax]);

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
