import Image from "next/image";
import Link from "next/link";
import * as S from "./styledSlide";
import { SlideProps } from "@/types/global";

const Slide = (props: SlideProps) => {
  const handleDetailNavigation = () => {
    if (typeof window !== "undefined")
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
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
          <Link href={`/detail/${props.index}`}>
            <S.DetailButton onClick={handleDetailNavigation}>
              상세보기
            </S.DetailButton>
          </Link>
        </S.RightSection>
      </S.Content>
    </S.Container>
  );
};

export default Slide;
