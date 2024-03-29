import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { dataById } from "@/data/projects";
import Bubble from "@/components/Bubble";
import { useEffect, useState } from "react";

import styled from "styled-components";

const Title = styled.div`
  font-weight: 900;
  color: White;
  font-size: 3.6rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const SubTitle = styled.div`
  font-weight: 900;
  color: White;
  opacity: 0.6;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 1.7rem;
  }
`;

const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const TagItem = styled.li`
  border-radius: 2rem;
  border: 1px solid #42d17d;

  padding: 0.6rem 1.6rem;

  color: #42d17d;
  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 0.1rem;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.4rem 1.3rem;
  }
`;

const LinkStyled = styled.a`
  cursor: pointer;

  border-radius: 2.4rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.4rem;
  font-weight: 900;
  white-space: nowrap;

  &:hover {
    color: #363636;
    background-color: #42d17d;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const OverViewText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-left: 0.6rem;
  }
`;

const SubText = styled.div`
  color: white;
  font-size: 2.6rem;
  font-weight: 900;

  padding: 1rem 0rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.6rem 0rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const InfoTitle = styled.div`
  border-radius: 2.4rem;
  width: 14rem;
  white-space: nowrap;
  padding: 0.8rem 0rem;

  color: #42d17d;
  font-weight: 900;
  background-color: #42d17e29;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 0rem;
  }
`;

const InfoText = styled.div`
  color: white;
  font-size: 1.4rem;

  display: flex;
  width: 100%;
  gap: 0.4rem;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

const MoreTitle = styled.div`
  color: #42d17d;
  font-weight: 900;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MoreText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CodeWrapper = styled.div`
  border-radius: 0.6rem;
  padding: 1.6rem 0;

  color: #42d17eeb;
  font-weight: 500;
  background-color: #8ea79829;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Array.isArray(id) ? Number(id[0]) : Number(id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 초기에도 isMobile 상태를 설정, 이를 안하면 detail 페이지에 반응형이 안먹음

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#272727] pb-20 pt-24 md:pt-36">
      <Bubble />

      {dataById[parsedId] && isMobile ? (
        <div className="w-[80%]">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {/** Title */}
            <div className="flex w-full flex-col gap-5">
              <div>
                <Title>{dataById[parsedId].title}</Title>
                <SubTitle>{dataById[parsedId].subTitle}</SubTitle>
              </div>
              <TagList>
                {dataById[parsedId].tagList.map((item, index) => (
                  <TagItem key={index}>{`#${item}`}</TagItem>
                ))}
              </TagList>
            </div>

            {/** Image */}
            <div className="flex flex-col gap-6">
              <div className="mt-14 flex w-full items-center justify-center gap-2">
                <LinkStyled
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </LinkStyled>
                <LinkStyled
                  href={dataById[parsedId].siteURL}
                  className="px-10 py-4"
                >
                  사이트 바로가기
                </LinkStyled>
              </div>
              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                className="rounded-xl"
              />
            </div>

            {/** OverView */}
            <div className="w-full">
              <SubText>Description.</SubText>
              <OverViewText>{dataById[parsedId].overView}</OverViewText>
            </div>

            {/** Info */}
            <div className="w-full">
              <SubText>Info.</SubText>
              <div className="ml-2 flex flex-col gap-3">
                <InfoContainer>
                  <InfoTitle>개발 기간</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[0]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>개발 구성원</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[1]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>개발 업무</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[2]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>기술 스택</InfoTitle>
                  <InfoText>
                    {dataById[parsedId].infoList[3].map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="stack"
                        className="rounded-xl"
                      />
                    ))}
                  </InfoText>
                </InfoContainer>
              </div>
            </div>

            {/** What did I do. */}
            <div className="w-full">
              <SubText>What did I do.</SubText>
              <div className="ml-2">
                <TagList>
                  {dataById[parsedId].pageList.map((item, index) => (
                    <TagItem key={index}>{`#${item}`}</TagItem>
                  ))}
                </TagList>
              </div>
            </div>

            {/** More */}
            {dataById[parsedId]?.moreList && (
              <div className="w-full">
                <SubText>More.</SubText>

                <div className="ml-2 flex flex-col gap-8">
                  {Object.entries(dataById[parsedId].moreList ?? {}).map(
                    ([key, value], index) => (
                      <MoreContainer key={index}>
                        <MoreTitle>{key}</MoreTitle>
                        <MoreText>
                          {value[0].split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                          {value[1] && <CodeWrapper>{value[1]}</CodeWrapper>}
                        </MoreText>
                      </MoreContainer>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-24 flex items-center justify-center">
            <LinkStyled onClick={() => router.back()} className="px-10 py-4">
              목록으로 가기
            </LinkStyled>
          </div>
        </div>
      ) : (
        <div className="w-[46%]">
          <div className="flex w-full flex-col items-center justify-center gap-16">
            {/** Title */}
            <div className="flex w-full flex-col gap-5">
              <div>
                <Title>{dataById[parsedId].title}</Title>
                <SubTitle>{dataById[parsedId].subTitle}</SubTitle>
              </div>

              <TagList>
                {dataById[parsedId].tagList.map((item, index) => (
                  <TagItem key={index}>{`#${item}`}</TagItem>
                ))}
              </TagList>
            </div>

            {/** Image */}
            <div className="flex flex-col gap-10">
              <div className="mt-16 flex w-full items-center justify-center gap-4">
                <LinkStyled
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </LinkStyled>
                <LinkStyled
                  href={dataById[parsedId].siteURL}
                  className="px-10 py-4"
                >
                  사이트 바로가기
                </LinkStyled>
              </div>
              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                className="rounded-xl"
              />
            </div>

            {/** OverView */}
            <div className="w-full">
              <SubText>Description.</SubText>
              <OverViewText>
                {dataById[parsedId].overView.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </OverViewText>
            </div>

            {/** Info */}
            <div className="w-full">
              <SubText>Info.</SubText>
              <div className="ml-4 flex flex-col gap-3">
                <InfoContainer>
                  <InfoTitle>개발 기간</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[0]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>개발 구성원</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[1]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>개발 업무</InfoTitle>
                  <InfoText>{dataById[parsedId].infoList[2]}</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <InfoTitle>기술 스택</InfoTitle>
                  <InfoText>
                    {dataById[parsedId].infoList[3].map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="stack"
                        className="rounded-xl"
                      />
                    ))}
                  </InfoText>
                </InfoContainer>
              </div>
            </div>

            {/** What did I do. */}
            <div className="w-full">
              <SubText>What did I do.</SubText>
              <div className="ml-4">
                <TagList>
                  {dataById[parsedId].pageList.map((item, index) => (
                    <TagItem key={index}>{`#${item}`}</TagItem>
                  ))}
                </TagList>
              </div>
            </div>

            {/** More */}
            {dataById[parsedId]?.moreList && (
              <div className="w-full">
                <SubText>More.</SubText>

                <div className="ml-4 flex flex-col gap-10">
                  {Object.entries(dataById[parsedId].moreList ?? {}).map(
                    ([key, value], index) => (
                      <MoreContainer key={index}>
                        <MoreTitle>{key}</MoreTitle>
                        <MoreText>
                          {value[0].split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                          {value[1] && <CodeWrapper>{value[1]}</CodeWrapper>}
                        </MoreText>
                      </MoreContainer>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mt-28 flex w-full items-center justify-center">
            <LinkStyled onClick={() => router.back()} className="px-14 py-6">
              목록으로 가기
            </LinkStyled>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

export async function getStaticPaths() {
  // 여기에서 사용 가능한 모든 id 값을 기반으로 paths 생성
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: number };
}) {
  return {
    props: {
      id,
    },
  };
}
