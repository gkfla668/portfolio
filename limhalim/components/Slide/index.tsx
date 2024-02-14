import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideContainer from "./SlideContainer";

import { dataById } from "@/data/projects";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings} className="mx-20 w-[112rem]">
        <SlideContainer
          index={1}
          imgURL={dataById[1].imgURL}
          title={dataById[1].title}
          subTitle={dataById[1].subTitle}
          tagList={dataById[1].tagList}
        />
        <SlideContainer
          index={2}
          imgURL={dataById[2].imgURL}
          title={dataById[2].title}
          subTitle={dataById[2].subTitle}
          tagList={dataById[2].tagList}
        />
        <SlideContainer
          index={3}
          imgURL={dataById[3].imgURL}
          title={dataById[3].title}
          subTitle={dataById[3].subTitle}
          tagList={dataById[3].tagList}
        />
        <SlideContainer
          index={4}
          imgURL={dataById[4].imgURL}
          title={dataById[4].title}
          subTitle={dataById[4].subTitle}
          tagList={dataById[4].tagList}
        />
        <SlideContainer
          index={5}
          imgURL={dataById[5].imgURL}
          title={dataById[5].title}
          subTitle={dataById[5].subTitle}
          tagList={dataById[5].tagList}
        />
      </Slider>
    </>
  );
};

export default Slide;
