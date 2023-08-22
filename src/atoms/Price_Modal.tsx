import { atom } from "recoil";

export const imgModal = atom<number>({
  key: "imgState",
  default: 0,
});

export const isImgModal = atom<boolean>({
  key: "isModalState",
  default: false,
});
