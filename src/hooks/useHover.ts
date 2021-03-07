import { useState, useEffect, RefObject } from "react";

type IUseHover<T extends HTMLElement = HTMLElement> = (
  elementRef: RefObject<T>
) => boolean;

export const useHover: IUseHover = (elementRef) => {
  const [value, setValue] = useState(false);
  const handleMouseOver = () => {
    setValue(true);
  };
  const handleMouseOut = () => {
    setValue(false);
  };

  useEffect(() => {
    const node = elementRef?.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [elementRef]);

  return !!value;
};
