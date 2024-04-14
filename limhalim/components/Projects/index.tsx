import { useEffect, useState } from "react";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";

import Slide from "@/components/Slide";

import * as S from "./styles";

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
    <S.Container id="Projects">
      {scroll && (
        <>
          <Title title="Projects" />
          <S.ContentBox>
            <Slide />
          </S.ContentBox>
        </>
      )}
    </S.Container>
  );
};

export default Projects;
