import { useEffect, useState } from "react";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";

import Slide from "@/components/Slide";

const Projects = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const threshold = 1800;

  useEffect(() => {
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    // 페이지 로드 시 현재 스크롤 위치 확인 및 scroll 상태 설정
    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); // clean up
    };
  }, []);

  return (
    <div
      id="Projects"
      className="flex min-h-screen w-full flex-col px-32 py-20"
    >
      {scroll && (
        <>
          <Title title="Projects" />
          <div className="flex flex-1 flex-col items-center justify-center">
            <Slide />
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
