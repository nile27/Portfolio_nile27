import { useEffect } from "react";
interface Idx {
  idx: number;
}

export default function Tap(idx: Idx) {
  useEffect(() => {
    console.log(idx);
  }, [idx]);
  return (
    <>
      <div className="tap-head">
        <h1>Eaaaaaaats (맛집 탐색 사이트)</h1>
        <span></span>
      </div>
    </>
  );
}
