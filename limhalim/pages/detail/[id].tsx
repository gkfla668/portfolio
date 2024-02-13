import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { dataById } from "@/data/projects";
import Bubble from "@/components/Bubble";

const Title = styled.div`
  font-family: "NanumSquareExtraBold";
  color: White;
  font-size: 3.6rem;
  white-space: nowrap;
`;

const SubTitle = styled.div`
  font-family: "NanumSquareBold";
  color: White;
  opacity: 0.6;
  font-size: 2.4rem;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  margin-top: 1.6rem;
`;

export const TagItem = styled.li`
  font-family: "NanumSquare";
  border-radius: 2rem;
  border: 1px solid #42d17d;

  padding: 0.6rem 1.6rem;

  color: #42d17d;
  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 0.1rem;

  white-space: nowrap;
`;

export const Link = styled.a`
  cursor: pointer;
  font-family: "NanumSquareExtraBold";
  border-radius: 2.4rem;

  padding: 1.4rem 2.6rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.4rem;
  font-weight: 700;

  &:hover {
    color: #272727;
    background-color: #42d17d;
    font-weight: 900;
  }
`;

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Array.isArray(id) ? Number(id[0]) : Number(id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#272727] pb-20 pt-36">
      <Bubble />
      {dataById[parsedId] && (
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
          <div className="mb-10 mt-24 flex w-full items-center justify-center gap-4">
            <Link href={dataById[parsedId].githubURL}>깃허브 바로가기</Link>
            <Link href={dataById[parsedId].siteURL}>사이트 바로가기</Link>
          </div>
          <Image
            src={dataById[parsedId].imgURL}
            alt="image"
            width={600}
            className="mb-24 rounded-xl"
          />
          {/** OverView */}
          <div className="w-full">
            <SubText>OverView.</SubText>
            <OverViewText>{dataById[parsedId].overView}</OverViewText>
          </div>
          {/** Info */}
          <div className="mb-28 mt-16 w-full">
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
          {/** 목록으로 가기 */}
          <div className="mt-10">
            <Link onClick={() => router.back()}>목록으로 가기</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const OverViewText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.6rem;
  font-family: "NanumSquare";
  line-height: 2.4rem;
  margin-left: 1rem;
`;

const SubText = styled.div`
  color: white;
  font-size: 2.6rem;
  font-family: "NanumSquareExtraBold";

  padding: 1.2rem 0rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
`;

const InfoTitle = styled.div`
  font-family: "NanumSquareBold";
  border-radius: 2.4rem;

  width: 9.8rem;

  white-space: nowrap;

  padding: 0.8rem 0;
  text-align: center;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.2rem;
`;

const InfoText = styled.div`
  color: white;
  font-family: "NanumSquare";
  font-size: 1.4rem;

  display: flex;
  width: 100%;
  gap: 0.4rem;
`;

export default DetailPage;
