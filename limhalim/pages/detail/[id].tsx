import Image from "next/image";
import { useRouter } from "next/router";

import { dataById } from "@/data/projects";
import Bubble from "@/components/Bubble";

import * as S from "../../styles/detailstyled";
import useWindowSizeHandler from "@/hooks/useWindowSizeHandler";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Array.isArray(id) ? Number(id[0]) : Number(id);
  const isMobile = useWindowSizeHandler();

  return (
    <S.Container>
      <Bubble />
      {dataById[parsedId] && isMobile ? (
        <div className="w-[80%]">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            {/** Title */}
            <div className="flex w-full flex-col gap-5">
              <div>
                <S.Title>{dataById[parsedId].title}</S.Title>
                <S.SubTitle>{dataById[parsedId].subTitle}</S.SubTitle>
              </div>
              <S.TagList>
                {dataById[parsedId].tagList.map((item, index) => (
                  <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                ))}
              </S.TagList>
            </div>

            {/** Image */}
            <div className="flex flex-col gap-6">
              <div className="mt-14 flex w-full items-center justify-center gap-2">
                <S.LinkStyled
                  href={dataById[parsedId].githubURL}
                  className="px-10 py-4"
                >
                  깃허브 바로가기
                </S.LinkStyled>
                {dataById[parsedId].siteURL && (
                  <S.LinkStyled
                    href={dataById[parsedId].siteURL}
                    className="px-10 py-4"
                  >
                    사이트 바로가기
                  </S.LinkStyled>
                )}
              </div>
              {dataById[parsedId].imgURL &&
                dataById[parsedId].imgURL.map((url, idx) => (
                  <Image
                    key={idx} // key는 idx 또는 url 중 고유한 값을 사용
                    src={url} // 여기서 url은 imgURL 배열의 요소
                    alt="image"
                    className="rounded-xl"
                    loading="lazy"
                  />
                ))}
            </div>

            {/** OverView */}
            <div className="w-full">
              <S.SubText>Description.</S.SubText>
              <S.OverViewText>{dataById[parsedId].overView}</S.OverViewText>
            </div>

            {/** Info */}
            <div className="w-full">
              <S.SubText>Info.</S.SubText>
              <div className="ml-2 flex flex-col gap-3">
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
                        loading="lazy"
                      />
                    ))}
                  </S.InfoText>
                </S.InfoContainer>
              </div>
            </div>

            {/** What did I do. */}
            <div className="w-full">
              <S.SubText>What did I do.</S.SubText>
              <div className="ml-2">
                <S.TagList>
                  {dataById[parsedId].whatDidIdo.map((item, index) => (
                    <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                  ))}
                </S.TagList>
              </div>
            </div>

            {/** More */}
            {dataById[parsedId]?.moreList && (
              <div className="w-full">
                <S.SubText>More.</S.SubText>

                <div className="ml-2 flex flex-col gap-8">
                  {Object.entries(dataById[parsedId].moreList ?? {}).map(
                    ([key, value], index) => (
                      <S.MoreContainer key={index}>
                        <S.MoreTitle>{key}</S.MoreTitle>
                        <S.MoreText>
                          {value[0].split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                          {value[1] && (
                            <S.CodeWrapper>{value[1]}</S.CodeWrapper>
                          )}
                        </S.MoreText>
                      </S.MoreContainer>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-24 flex items-center justify-center">
            <S.LinkStyled onClick={() => router.back()} className="px-10 py-4">
              목록으로 가기
            </S.LinkStyled>
          </div>
        </div>
      ) : (
        <div className="w-[46%]">
          <div className="flex w-full flex-col items-center justify-center gap-24">
            {/** Title */}
            <div className="flex w-full flex-col gap-5">
              <div>
                <S.Title>{dataById[parsedId].title}</S.Title>
                <S.SubTitle>{dataById[parsedId].subTitle}</S.SubTitle>
              </div>

              <S.TagList>
                {dataById[parsedId].tagList.map((item, index) => (
                  <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                ))}
              </S.TagList>
            </div>

            {/** Image */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex w-full items-center justify-center gap-4">
                {dataById[parsedId].githubURL && (
                  <S.LinkStyled
                    href={dataById[parsedId].githubURL}
                    className="px-10 py-4"
                  >
                    깃허브 바로가기
                  </S.LinkStyled>
                )}

                {dataById[parsedId].siteURL && (
                  <S.LinkStyled
                    href={dataById[parsedId].siteURL}
                    className="px-10 py-4"
                  >
                    사이트 바로가기
                  </S.LinkStyled>
                )}
              </div>
              {dataById[parsedId].imgURL &&
                dataById[parsedId].imgURL.map((url, idx) => (
                  <Image
                    key={idx} // key는 idx 또는 url 중 고유한 값을 사용
                    src={url} // 여기서 url은 imgURL 배열의 요소
                    alt="image"
                    className="rounded-xl"
                    loading="lazy"
                  />
                ))}
            </div>

            {/** OverView */}
            <div className="w-full">
              <S.SubText>Description.</S.SubText>
              <S.OverViewText>
                {dataById[parsedId].overView.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </S.OverViewText>
            </div>

            {/** Info */}
            <div className="w-full">
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
                        loading="lazy"
                      />
                    ))}
                  </S.InfoText>
                </S.InfoContainer>
              </div>
            </div>

            {/** What did I do. */}
            <div className="w-full">
              <S.SubText>What did I do.</S.SubText>
              <div className="ml-4">
                <S.TagList>
                  {dataById[parsedId].whatDidIdo.map((item, index) => (
                    <S.TagItem key={index}>{`#${item}`}</S.TagItem>
                  ))}
                </S.TagList>
              </div>
            </div>

            {/** More */}
            {dataById[parsedId]?.moreList && (
              <div className="w-full">
                <S.SubText>More.</S.SubText>

                <div className="ml-4 flex flex-col gap-10">
                  {Object.entries(dataById[parsedId].moreList ?? {}).map(
                    ([key, value], index) => (
                      <S.MoreContainer key={index}>
                        <S.MoreTitle>{key}</S.MoreTitle>
                        <S.MoreText>
                          {value[0].split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                          {value[1] && (
                            <S.CodeWrapper>{value[1]}</S.CodeWrapper>
                          )}
                        </S.MoreText>
                      </S.MoreContainer>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mt-28 flex w-full items-center justify-center">
            <S.LinkStyled onClick={() => router.back()} className="px-14 py-6">
              목록으로 가기
            </S.LinkStyled>
          </div>
        </div>
      )}
    </S.Container>
  );
};

export default Detail;
