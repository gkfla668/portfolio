import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./styled";

import { dataById } from "@/data/projects";
import Bubble from "@/components/Bubble";
import { useEffect, useState } from "react";

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
            <div className="flex w-[64%] flex-col items-center justify-center">
              <div className="flex w-full flex-col gap-2">
                <S.Title>{dataById[parsedId].title}</S.Title>
                <S.SubTitle>{dataById[parsedId].subTitle}</S.SubTitle>
                <S.TagList>
                  {dataById[parsedId].tagList.map((item, index) => (
                    <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                  ))}
                </S.TagList>
              </div>
              <div className="mb-8 mt-20 flex w-full items-center justify-center gap-3 md:mt-24 md:gap-4">
                <S.Link
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </S.Link>
                <S.Link
                  href={dataById[parsedId].siteURL}
                  className="px-10 py-4"
                >
                  사이트 바로가기
                </S.Link>
              </div>

              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                className="mb-12 w-[600px] rounded-xl md:mb-28 md:w-full"
              />

              {/** OverView */}
              <div className="w-full">
                <S.SubText>OverView.</S.SubText>
                <S.OverViewText>{dataById[parsedId].overView}</S.OverViewText>
              </div>
              {/** Info */}
              <div className="mb-28 mt-16 w-full">
                <S.SubText>Info.</S.SubText>
                <div className="ml-4 flex flex-col gap-3">
                  <S.InfoContainer>
                    <S.InfoTitle>개발 기간</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[0]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>개발 구성원</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[1]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>개발 업무</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[2]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>기술 스택</S.InfoTitle>
                    <S.InfoText>
                      {dataById[parsedId].infoList[3].map((item, index) => (
                        <Image
                          key={index}
                          src={item}
                          alt="stack"
                          className="rounded-xl"
                        />
                      ))}
                    </S.InfoText>
                  </S.InfoContainer>
                </div>
              </div>
              <div className="mt-10">
                <S.Link onClick={() => router.back()} className="px-14 py-6">
                  목록으로 가기
                </S.Link>
              </div>
            </div>
          )
        : dataById[parsedId] && (
            <div className="flex w-[44%] flex-col items-center justify-center">
              <div className="flex w-full flex-col gap-2">
                <S.Title>{dataById[parsedId].title}</S.Title>
                <S.SubTitle>{dataById[parsedId].subTitle}</S.SubTitle>
                <S.TagList>
                  {dataById[parsedId].tagList.map((item, index) => (
                    <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                  ))}
                </S.TagList>
              </div>
              <div className="mb-8 mt-24 flex w-full items-center justify-center gap-4">
                <S.Link
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </S.Link>
                <S.Link
                  href={dataById[parsedId].siteURL}
                  className="px-10 py-4"
                >
                  사이트 바로가기
                </S.Link>
              </div>

              <Image
                src={dataById[parsedId].imgURL}
                alt="image"
                style={{ width: "100%" }}
                className="mb-28 rounded-xl"
              />

              {/** OverView */}
              <div className="w-full">
                <S.SubText>OverView.</S.SubText>
                <S.OverViewText>{dataById[parsedId].overView}</S.OverViewText>
              </div>
              {/** Info */}
              <div className="mb-28 mt-16 w-full">
                <S.SubText>Info.</S.SubText>
                <div className="ml-4 flex flex-col gap-3">
                  <S.InfoContainer>
                    <S.InfoTitle>개발 기간</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[0]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>개발 구성원</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[1]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>개발 업무</S.InfoTitle>
                    <S.InfoText>{dataById[parsedId].infoList[2]}</S.InfoText>
                  </S.InfoContainer>
                  <S.InfoContainer>
                    <S.InfoTitle>기술 스택</S.InfoTitle>
                    <S.InfoText>
                      {dataById[parsedId].infoList[3].map((item, index) => (
                        <Image
                          key={index}
                          src={item}
                          alt="stack"
                          className="rounded-xl"
                        />
                      ))}
                    </S.InfoText>
                  </S.InfoContainer>
                </div>
              </div>
              <div className="mt-10">
                <S.Link onClick={() => router.back()} className="px-14 py-6">
                  목록으로 가기
                </S.Link>
              </div>
            </div>
          )}
    </div>
  );
};

export default DetailPage;
