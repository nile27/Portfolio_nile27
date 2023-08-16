import { atom } from "recoil";

export const maxView = atom<boolean>({
  key: "viewState",
  default: true,
});
