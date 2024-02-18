import Image from "next/image";
import { useRouter } from "next/router";

import { dataById } from "@/data/projects";
import Bubble from "@/components/Bubble";
import { useEffect, useState } from "react";

import styled from "styled-components";

export const Title = styled.div`
  font-weight: 900;
  color: White;
  font-size: 3.6rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: 900;
  color: White;
  opacity: 0.6;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  margin-top: 1.4rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

export const TagItem = styled.li`
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
  }
`;

export const Link = styled.a`
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

export const OverViewText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

export const SubText = styled.div`
  color: white;
  font-size: 2.6rem;
  font-weight: 900;

  padding: 1.2rem 0rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.6rem 0rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const InfoTitle = styled.div`
  border-radius: 2.4rem;
  width: 14rem;
  white-space: nowrap;
  padding: 0.8rem 1rem;

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

export const InfoText = styled.div`
  color: white;
  font-size: 1.4rem;

  display: flex;
  width: 100%;
  gap: 0.4rem;

  white-space: nowrap;
`;

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Array.isArray(id) ? Number(id[0]) : Number(id);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#272727] pb-20 pt-24 md:pt-36">
      <Bubble />

      {isMobile
        ? dataById[parsedId] && (
            <div className="flex w-[80%] flex-col items-center justify-center">
              <div className="flex w-full flex-col gap-2">
                <Title>{dataById[parsedId].title}</Title>
                <SubTitle>{dataById[parsedId].subTitle}</SubTitle>
                <TagList>
                  {dataById[parsedId].tagList.map((item, index) => (
                    <TagItem key={index}>{`#${item}`}</TagItem>
                  ))}
                </TagList>
              </div>
              <div className="mb-8 mt-20 flex w-full items-center justify-center gap-3 md:mt-24 md:gap-4">
                <Link
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </Link>
                <Link href={dataById[parsedId].siteURL} className="px-10 py-4">
                  사이트 바로가기
                </Link>
              </div>

              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                className="mb-12 w-[600px] rounded-xl md:mb-28 md:w-full"
              />

              {/** OverView */}
              <div className="w-full">
                <SubText>OverView.</SubText>
                <OverViewText>{dataById[parsedId].overView}</OverViewText>
              </div>
              {/** Info */}
              <div className="mb-28 mt-16 w-full">
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
              <div className="mt-10">
                <Link onClick={() => router.back()} className="px-14 py-6">
                  목록으로 가기
                </Link>
              </div>
            </div>
          )
        : dataById[parsedId] && (
            <div className="flex w-[44%] flex-col items-center justify-center">
              <div className="flex w-full flex-col gap-2">
                <Title>{dataById[parsedId].title}</Title>
                <SubTitle>{dataById[parsedId].subTitle}</SubTitle>
                <TagList>
                  {dataById[parsedId].tagList.map((item, index) => (
                    <TagItem key={index}>{`#${item}`}</TagItem>
                  ))}
                </TagList>
              </div>
              <div className="mb-8 mt-24 flex w-full items-center justify-center gap-4">
                <Link
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </Link>
                <Link href={dataById[parsedId].siteURL} className="px-10 py-4">
                  사이트 바로가기
                </Link>
              </div>

              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                style={{ width: "100%" }}
                className="mb-28 rounded-xl"
              />

              {/** OverView */}
              <div className="w-full">
                <SubText>OverView.</SubText>
                <OverViewText>{dataById[parsedId].overView}</OverViewText>
              </div>
              {/** Info */}
              <div className="mb-28 mt-16 w-full">
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
              <div className="mt-10">
                <Link onClick={() => router.back()} className="px-14 py-6">
                  목록으로 가기
                </Link>
              </div>
            </div>
          )}
    </div>
  );
};

export default DetailPage;
