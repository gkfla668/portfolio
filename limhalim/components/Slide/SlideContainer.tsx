import Image from "next/image";
import * as S from "./styledSlide";
import { SlideProps } from "@/types/global";
import Link from "next/link";

const SlideContainer = (props: SlideProps) => {
  const handleDetailNavigation = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <S.Container>
      <S.Content>
        <Image
          src={props.imgURL}
          alt="img"
          width={500}
          className="rounded-xl"
        />

        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            <S.Title>{props.title}</S.Title>
            <S.SubTitle>{props.subTitle}</S.SubTitle>
            <S.TagList>
              {props.tagList.map((item, index) => (
                <S.TagItem key={index}>{`#${item}`}</S.TagItem>
              ))}
            </S.TagList>
          </div>
          <Link href={`/detail/${props.index}`}>
            <S.DetailButton onClick={handleDetailNavigation}>
              상세보기
            </S.DetailButton>
          </Link>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default SlideContainer;
