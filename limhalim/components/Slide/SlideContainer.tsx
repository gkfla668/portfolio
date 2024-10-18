import Image from "next/image";
import router from "next/router";
import * as S from "./styledSlide";
import { SlideProps } from "@/types/global";

const Slide = (props: SlideProps) => {
  const handleDetailNavigation = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    router.push(`/detail/${props.index}`); // router를 사용해 링크로 이동
  };

  return (
    <S.Container>
      <S.Content>
        <S.ImageSection>
          <Image
            src={props.imgURL[0]}
            alt="img"
            className="w-full rounded-xl"
          />
        </S.ImageSection>
        <S.RightSection>
          <S.InfoBox>
            <S.Title>{props.title}</S.Title>
            <S.SubTitle>{props.subTitle}</S.SubTitle>
            <S.TagList>
              {props.tagList.map((item, index) => (
                <S.TagItem key={index}>{`#${item}`}</S.TagItem>
              ))}
            </S.TagList>
          </S.InfoBox>
          <S.DetailButton onClick={handleDetailNavigation}>
            상세보기
          </S.DetailButton>
        </S.RightSection>
      </S.Content>
    </S.Container>
  );
};

export default Slide;
