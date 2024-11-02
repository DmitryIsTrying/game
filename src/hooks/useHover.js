import { useEffect, useState } from "react";

export const useHover = (ref) => {
  const [isHover, setIsHover] = useState(false);

  const on = () => {
    setIsHover(true);
  };
  const off = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.addEventListener("mouseenter", on);
    node.addEventListener("mouseleave", off);

    return () => {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mouseleave", off);
    };
  }, [ref]);

  return isHover;
};
