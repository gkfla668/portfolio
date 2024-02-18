import { useEffect, useState } from "react";
import Image from "next/image";

import velogPNG from "/public/images/velog.png";
import githubPNG from "/public/images/github.png";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";

import * as S from "./styled";

const Contact = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const threshold = 2400;

  useEffect(() => {
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    // 페이지 로드 시 현재 스크롤 위치 확인 및 scroll 상태 설정
    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, []);

  return (
    <div
      id="Contact"
      className="relative min-h-screen w-full px-16 py-20 md:px-32"
    >
      {scroll && (
        <>
          <Title title="Contact" />
          <S.Text>
            안녕하세요, 사용자의 경험을 우선시하는 프론트엔드 개발자입니다.
          </S.Text>
          <S.Text>
            느리더라도 천천히, 포기하지 않는 개발자가 되기 위해 꾸준히 블로그를
            운영하며 매 프로젝트마다 효율적으로 소통하며 개발하는 자세를 갖추려
            하고 있습니다.
          </S.Text>
          <S.Text>
            생각을 나누고, 지식을 공유하는 건강한 대화를 좋아합니다. <br />
            언제든 편하게 연락주세요 :)
          </S.Text>
          <div className="absolute right-[3%] top-[65%] flex flex-col items-center justify-center p-4">
            <S.Wrapper>
              <S.Container>
                <S.Info>Phone</S.Info>
                <S.Detail>010-6384-9653</S.Detail>
              </S.Container>
              <S.Container>
                <S.Info>Email</S.Info>
                <S.Detail>harim668@gmail.com</S.Detail>
              </S.Container>
            </S.Wrapper>

            <div className="flex gap-12 md:gap-20">
              <S.Link href="https://github.com/gkfla668">
                <Image src={githubPNG} alt="github" width={40} height={40} />{" "}
                <S.LinkTitle>Github</S.LinkTitle>
              </S.Link>

              <S.Link href="https://velog.io/@gkfla668">
                <Image src={velogPNG} alt="velog" width={36} height={36} />
                <S.LinkTitle>Blog</S.LinkTitle>
              </S.Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
