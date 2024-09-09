import { StaticImageData } from "next/image";

export interface SlideProps {
  index: number;
  imgURL: StaticImageData[];
  title: string;
  subTitle?: string;
  tagList: string[];
}

export interface DetailProps extends SlideProps {
  githubURL: string;
  siteURL: string;
  overView: string;
  infoList: string[];
}
