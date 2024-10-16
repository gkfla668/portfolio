import { useEffect, useState } from "react";

const useWindowSizeHandler = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // 초기에도 isMobile 상태를 설정
    handleResize();

    // 윈도우의 크기가 변경될 때마다 이를 업데이트
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useWindowSizeHandler;
