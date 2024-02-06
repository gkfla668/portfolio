import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HandleScroll from "@/utils/handleScroll";

import SlideContainer from "./SlideContainer";

import MeQ from "../../public/images/MeQ.png";
import DamDam from "../../public/images/Damdam.png";
import StockOneQ from "../../public/images/StockOneQ.png";
import LivePick from "../../public/images/LivePick.png";
import Wanted from "../../public/images/WantedClone.png";

import { dataById } from "@/data/projects";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className="mx-20 ">
        <SlideContainer
          index={1}
          imgURL={MeQ}
          title={dataById[1].title}
          subTitle={dataById[1].subTitle}
          tagList={dataById[1].tagList}
        />
        <SlideContainer
          index={2}
          imgURL={DamDam}
          title={dataById[2].title}
          subTitle={dataById[2].subTitle}
          tagList={dataById[2].tagList}
        />
        <SlideContainer
          index={3}
          imgURL={StockOneQ}
          title={dataById[3].title}
          subTitle={dataById[3].subTitle}
          tagList={dataById[3].tagList}
        />
        <SlideContainer
          index={4}
          imgURL={LivePick}
          title={dataById[4].title}
          subTitle={dataById[4].subTitle}
          tagList={dataById[4].tagList}
        />
        <SlideContainer
          index={5}
          imgURL={Wanted}
          title={dataById[5].title}
          subTitle={dataById[5].subTitle}
          tagList={dataById[5].tagList}
        />
      </Slider>
    </>
  );
};

export default Slide;
