import { Pricearr } from "../data/PriceData";
import { useRecoilState } from "recoil";
import { imgModal, isImgModal } from "../atoms/Price_Modal";

export default function Price() {
  const [zoom, setZoom] = useRecoilState(isImgModal);
  const [, setIndex] = useRecoilState(imgModal);

  function zoomFunc(idx: number) {
    setIndex(idx);
    setZoom(!zoom);
    window.scrollTo(0, 10000);
  }

  return (
    <div className="box">
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
