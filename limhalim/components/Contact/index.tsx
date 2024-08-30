import { useEffect, useState } from "react";
import Image from "next/image";

import velogPNG from "/public/icons/velog.webp";
import githubPNG from "/public/icons/github.webp";

import HandleScroll from "@/utils/handleScroll";

import * as S from "./styled";

interface BlogPost {
  title: string;
  link: string;
  contentSnippet?: string;
}

const Contact = ({ latestPosts }: { latestPosts: BlogPost[] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const threshold = 2400;

  useEffect(() => {
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    // 페이지 로드 시 현재 스크롤 위치 확인 및 scroll 상태 설정
    scrollHandler();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // 초기에도 isMobile 상태를 설정

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleResize); // 윈도우의 크기가 변경될 때마다 이를 업데이트

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="Contact"
      className="relative flex h-full w-full items-center justify-center"
    >
      {scroll && (
        <div className="flex flex-col gap-[1.6rem] md:gap-[3.6rem]">
          <S.PostContainer>
            <S.PostList>
              {latestPosts.map((post, index) => (
                <S.PostItem key={index}>
                  <S.PostLink
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostContent>
                      {isMobile
                        ? post.contentSnippet?.slice(0, 100) + "..."
                        : post.contentSnippet?.slice(0, 160) + "..."}
                    </S.PostContent>
                  </S.PostLink>
                </S.PostItem>
              ))}
            </S.PostList>
          </S.PostContainer>

          <div className="flex w-full justify-between">
            <S.Wrapper>
              <div className="flex flex-col gap-[0.4rem] md:flex-row md:gap-[1.6rem]">
                <S.Container>
                  <S.Info>Phone</S.Info>
                  <S.Detail>010-6384-9653</S.Detail>
                </S.Container>
                <S.Container>
                  <S.Info>Email</S.Info>
                  <S.Detail>harim668@gmail.com</S.Detail>
                </S.Container>
              </div>

              <div className="flex flex-col items-center justify-center gap-[1rem] md:flex-row md:gap-[1.6rem]">
                <S.Link href="https://github.com/gkfla668">
                  <Image
                    src={githubPNG}
                    alt="github"
                    width={isMobile ? 24 : 36}
                    loading="lazy"
                  />
                  <S.LinkTitle>Github</S.LinkTitle>
                </S.Link>
                <S.Link href="https://velog.io/@gkfla668">
                  <Image
                    src={velogPNG}
                    alt="velog"
                    width={isMobile ? 24 : 28}
                    loading="lazy"
                  />
                  <S.LinkTitle>Velog</S.LinkTitle>
                </S.Link>
              </div>
            </S.Wrapper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
