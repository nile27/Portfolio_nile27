import { Pricearr } from "../data/PriceData";
import { scrollRef } from "../App";
import { useRecoilState } from "recoil";
import { imgModal, isImgModal } from "../atoms/Price_Modal";

export default function Price({ content1Ref }: scrollRef) {
  const [zoom, setZoom] = useRecoilState(isImgModal);
  const [, setIndex] = useRecoilState(imgModal);

  function zoomFunc(idx: number) {
    setIndex(idx);
    setZoom(!zoom);
    if (content1Ref.current) {
      content1Ref.current[4]?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }

  return (
    <div
      className="box"
      ref={(el) => (content1Ref.current ? (content1Ref.current[4] = el) : null)}
    >
      <div className="header">
        <h1 id="header">Price</h1>
      </div>
      <div className="img-box">
        <div className="container_ul">
          <ul className="price-list-box">
            {Pricearr.map((item, idx) => {
              return (
                <li key={idx} onClick={() => zoomFunc(idx)}>
                  <img src={item.img} alt={`${item.img}`} />

                  <span>{item.date}</span>
                  <span>{item.name}</span>
                  <span> {item.mainfrom}</span>
                  <span> {item.from || null}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
