import { useEffect, useState } from "react";
import Image from "next/image";

import HandleScroll from "@/utils/handleScroll";

import Profile from "/public/images/profile.jpg";

import * as S from "./styled";

const About = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const threshold = 200;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

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
    <div id="About">
      {scroll && (
        <S.ContentBox>
          {isMobile ? (
            <div className="flex w-full flex-col items-start">
              <S.Job>
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
              </S.Job>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-16 py-12">
              <S.Job>
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
              </S.Job>
              <S.Bar />
              <S.Birth>2000.08.31</S.Birth>
            </div>
          )}

          {isMobile ? (
            <div className="flex flex-col justify-center gap-12">
              <S.ProfileImageWrapper>
                <Image
                  src={Profile}
                  alt="img"
                  width={isMobile ? 160 : 200}
                  loading="lazy"
                  className="rounded-md"
                />
              </S.ProfileImageWrapper>
              <S.ActivitiesContainer>
                <S.ActivityItem>
                  <S.Date>2024.02-2024.08</S.Date>
                  <S.Text>구름톤 유니브 2기, Web 파트 수료</S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.08-2023.11</S.Date>
                  <S.Text>경기청년갭이어 프로그램 2기 수료</S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.07-2023.08</S.Date>
                  <S.Text>
                    (주)위드플러스 프론트엔드 직무 2개월 인턴 근무
                  </S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.03-2023.06</S.Date>
                  <S.Text>
                    UMC(University Makeus Challenge) 4기, Web 파트 스터디장 수료
                  </S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2019.03-2024.08</S.Date>
                  <S.Text>
                    아주대학교 디지털미디어학과 & 소프트웨어학과 재학 중
                  </S.Text>
                </S.ActivityItem>
              </S.ActivitiesContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-20">
              <S.ProfileImageWrapper>
                <Image
                  src={Profile}
                  alt="img"
                  width={300}
                  loading="lazy"
                  className="rounded-xl"
                  unoptimized
                />
              </S.ProfileImageWrapper>
              <S.ActivitiesContainer>
                <S.ActivityItem>
                  <S.Date>2024.02-2024.08</S.Date>
                  <S.Text>
                    <a
                      href="https://9oormthon.university/"
                      className="text-[#42d17d]"
                    >
                      구름톤 유니브
                    </a>
                    2기, Web 파트 수료
                  </S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.08-2023.11</S.Date>
                  <S.Text>경기청년갭이어 프로그램 2기 수료</S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.07-2023.08</S.Date>
                  <S.Text>
                    <a href="https://withplus.plus/" className="text-[#42d17d]">
                      (주)위드플러스
                    </a>
                    프론트엔드 직무 2개월 인턴 근무
                  </S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2023.03-2023.08</S.Date>
                  <S.Text>
                    <a
                      href="https://www.makeus.in/umc"
                      className="text-[#42d17d]"
                    >
                      UMC(University Makeus Challenge)
                    </a>
                    4기, Web 파트 수료
                  </S.Text>
                </S.ActivityItem>
                <S.ActivityItem>
                  <S.Date>2019.03-2024.08</S.Date>
                  <S.Text>
                    <a
                      href="https://www.ajou.ac.kr/kr/index.do"
                      className="text-[#42d17d]"
                    >
                      아주대학교
                    </a>
                    디지털미디어학과 & 소프트웨어학과 재학 중
                  </S.Text>
                </S.ActivityItem>
              </S.ActivitiesContainer>
            </div>
          )}
        </S.ContentBox>
      )}
    </div>
  );
};

export default About;
