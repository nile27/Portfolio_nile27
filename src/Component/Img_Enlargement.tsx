import { Pricearr } from "../data/PriceData";
import { useSetRecoilState } from "recoil";
import { isImgModal } from "../atoms/Price_Modal";
interface zoom {
  index: number;
}
export default function Enlargement({ index }: zoom) {
  document.body.style.overflow = "hidden";

  const setisModal = useSetRecoilState(isImgModal);

  function handler() {
    document.body.style.overflow = "unset";
    setisModal(false);
  }
  return (
    <div className="img-background" onClick={handler}>
      <div className="img-body">
        <div className="img-head">
          <button onClick={handler}></button>
        </div>
        <img src={Pricearr[index].img} alt={Pricearr[index].name}></img>
      </div>
    </div>
  );
}
