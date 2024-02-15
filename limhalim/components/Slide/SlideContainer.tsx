import Image from "next/image";
import * as S from "./styledSlide";
import { SlideProps } from "@/types/global";
import Link from "next/link";
import { useEffect, useState } from "react";

const SlideContainer = (props: SlideProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDetailNavigation = () => {
    if (typeof window !== "undefined")
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <S.Container>
      <S.Content>
        <S.ImageWrapper>
          <Image
            src={props.imgURL}
            alt="img"
            width={isMobile ? 440 : 1400}
            className="rounded-xl"
          />
        </S.ImageWrapper>

        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col gap-1 md:gap-2">
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
