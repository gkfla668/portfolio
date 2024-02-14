import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";
import { fade, fadeIn } from "@/styles/animation";

import Profile from "/public/images/profile.jpg";

const SubTitleContainer = styled.div`
  font-family: "NanumSquareExtraBold";
  font-size: 4.8rem;

  white-space: nowrap;

  color: #eee;
  opacity: 0.4;

  span {
    opacity: 0;
    margin-right: 0.2rem;
  }

  :nth-child(1) {
    animation: ${fade} 4s forwards;
  }
  :nth-child(2) {
    animation: ${fade} 4.4s forwards;
  }
  :nth-child(3) {
    animation: ${fade} 4.8s forwards;
  }
  :nth-child(4) {
    animation: ${fade} 5.2s forwards;
  }
  :nth-child(5) {
    animation: ${fade} 5.6s forwards;
  }
  :nth-child(6) {
    animation: ${fade} 6s forwards;
  }
  :nth-child(7) {
    animation: ${fade} 6.4s forwards;
  }
  :nth-child(8) {
    animation: ${fade} 6.8s forwards;
  }
  :nth-child(9) {
    animation: ${fade} 7.2s forwards;
  }
  :nth-child(10) {
    animation: ${fade} 7.6s forwards;
  }
  :nth-child(11) {
    animation: ${fade} 8s forwards;
  }
  :nth-child(12) {
    animation: ${fade} 8.4s forwards;
  }
  :nth-child(13) {
    animation: ${fade} 9s forwards;
  }
  :nth-child(14) {
    animation: ${fade} 9.4s forwards;
  }
  :nth-child(15) {
    animation: ${fade} 9.8s forwards;
  }
  :nth-child(16) {
    animation: ${fade} 10.2s forwards;
  }
  :nth-child(17) {
    animation: ${fade} 10.6s forwards;
  }
  :nth-child(18) {
    animation: ${fade} 11s forwards;
  }
  :nth-child(19) {
    animation: ${fade} 11.4s forwards;
  }
  :nth-child(20) {
    animation: ${fade} 12s forwards;
  }
  :nth-child(21) {
    animation: ${fade} 12.4s forwards;
  }
  :nth-child(22) {
    animation: ${fade} 12.8s forwards;
  }
  :nth-child(23) {
    animation: ${fade} 13.2s forwards;
  }
  :nth-child(24) {
    animation: ${fade} 13.6s forwards;
  }
  :nth-child(25) {
    animation: ${fade} 14s forwards;
  }
  :nth-child(26) {
    animation: ${fade} 14.4s forwards;
  }
`;

const About = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const threshold = 200;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, []);

  return (
    <div id="About" className="flex min-h-screen w-full flex-col px-32 py-20">
      {scroll && (
        <>
          <Title title="About" />

          <div className="flex w-full flex-1 flex-col items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-10 py-8 ">
              <SubTitleContainer>
                <span>F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d </span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </SubTitleContainer>
              <Bar />
              <Birth>2000.08.31</Birth>
            </div>

            <div className="flex items-center justify-center gap-20">
              <ImageWrapper>
                <Image
                  src={Profile}
                  alt="img"
                  width={300}
                  loading="eager"
                  className="rounded-xl"
                />
              </ImageWrapper>
              <Wrapper>
                <Container>
                  <Date>2024.02-2024.08</Date>
                  <Text>
                    <a
                      href="https://9oormthon.university/"
                      className="text-[#42d17d]"
                    >
                      구름톤 유니브
                    </a>
                    2기, Web 파트 활동 중
                  </Text>
                </Container>
                <Container>
                  <Date>2023.08-2023.11</Date>
                  <Text>경기청년갭이어 프로그램 2기 수료</Text>
                </Container>
                <Container>
                  <Date>2023.07-2023.08</Date>
                  <Text>
                    <a href="https://withplus.plus/" className="text-[#42d17d]">
                      (주)위드플러스
                    </a>
                    프론트엔드 직무 2개월 인턴 근무
                  </Text>
                </Container>
                <Container>
                  <Date>2023.03-2023.06</Date>
                  <Text>
                    <a
                      href="https://www.makeus.in/umc"
                      className="text-[#42d17d]"
                    >
                      UMC(University Makeus Challenge)
                    </a>
                    4기, Web 파트 스터디장 수료
                  </Text>
                </Container>
                <Container>
                  <Date>2019.03-2024-02</Date>
                  <Text>
                    <a
                      href="https://www.ajou.ac.kr/kr/index.do"
                      className="text-[#42d17d]"
                    >
                      아주대학교
                    </a>
                    디지털미디어학과 & 소프트웨어학과 졸업
                  </Text>
                </Container>
              </Wrapper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ImageWrapper = styled.div`
  animation: ${fadeIn} 6s forwards;
`;

const Birth = styled.p`
  color: #eeeeee95;
  opacity: 0;
  font-family: "NanumSquareExtraBold";
  font-size: 4rem;
  animation: ${fade} 14s forwards;
`;

const Bar = styled.div`
  border: 1.6px solid #eeeeee53;
  opacity: 0;

  width: 28rem;
  height: 0.6rem;
  animation: ${fade} 12s forwards;

  border-radius: 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  :nth-child(1) {
    animation: ${fadeIn} 4s forwards;
  }
  :nth-child(2) {
    animation: ${fadeIn} 5s forwards;
  }
  :nth-child(3) {
    animation: ${fadeIn} 6s forwards;
  }
  :nth-child(4) {
    animation: ${fadeIn} 7s forwards;
  }
  :nth-child(5) {
    animation: ${fadeIn} 8s forwards;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Date = styled.div`
  font-family: "NanumSquareBold";
  border-radius: 2.4rem;

  white-space: nowrap;

  padding: 0.8rem 1.6rem;
  text-align: center;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.2rem;
`;

const Text = styled.p`
  color: white;
  font-family: "NanumSquare";
  font-size: 1.4rem;

  display: flex;
  gap: 0.4rem;

  white-space: nowrap;
`;

export default About;
