import { ChangeEvent } from "react";

export const debounce = (
  e: ChangeEvent<HTMLInputElement>,
  f: (e: ChangeEvent<HTMLInputElement>) => void,
  time: number
) => {
  let timer: NodeJS.Timeout;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      f(e);
    }, time);
  };
};
