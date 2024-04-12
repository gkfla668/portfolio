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
        {Object.values(dataById).map((item, index) => (
          <SlideContainer
            key={index}
            index={index}
            imgURL={item.imgURL}
            title={item.title}
            subTitle={item.subTitle}
            tagList={item.tagList}
          />
        ))}
      </Slider>
    </>
  );
};

export default Slide;
