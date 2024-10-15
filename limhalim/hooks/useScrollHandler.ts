import { useEffect, useState } from "react";

const useScrollHandler = (threshold: number) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > threshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); // clean up
    };
  }, [threshold]);

  return scroll;
};

export default useScrollHandler;
