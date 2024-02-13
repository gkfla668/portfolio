import Image from "next/image";
import { useEffect, useState } from "react";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";
import styled from "styled-components";

import ReactSVG from "../../public/icons/react_circle.png";
import NextJSSVG from "../../public/icons/next.js_circle.png";
import JavaScriptSVG from "../../public/icons/javascript_circle.svg";
import TypeScriptSVG from "../../public/icons/typescript_circle.png";
import RecoilSVG from "../../public/icons/recoil_circle.png";
import ReduxSVG from "../../public/icons/redux_circle.webp";
import TailwindSVG from "../../public/icons/tailwind_circle.png";
import StyledComponentsSVG from "../../public/icons/styledcomponents_circle.png";

import { fadeIn } from "@/styles/animation";

const Center = styled.div`
  font-family: "NanumSquareBold";
  border-radius: 2.4rem;

  white-space: nowrap;

  padding: 1rem 4rem;
  text-align: center;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.8rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  margin: 0px auto;
  width: 480px;
  height: 480px;
  position: relative;

  animation: ${fadeIn} 6s forwards;
`;

const OutCircle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 3px solid #42d17d;
  box-shadow: 0 0 4px #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: Rotate 32s linear infinite;

  :nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  :nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  :nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const Item = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #42d17d 0%, #47c07a 100%);
  box-shadow: 0 0 4px #eee;

  @keyframes Rotate-reverse {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  img {
    margin: 0px auto;
    width: 90%;
    animation: Rotate-reverse 32s linear infinite;
  }
`;

const InCircle = styled.div`
  @keyframes circle-rotate {
    from {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(405deg);
    }
  }

  animation: circle-rotate 32s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 68%;
  height: 68%;
  border: 3px solid #42d17d;
  box-shadow: 0 0 4px #eee;
  border-radius: 50%;

  :nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  :nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  :nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const Skills = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const threshold = 1000;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, []);

  return (
    <div id="Skills" className="flex min-h-screen w-full flex-col px-32 py-20">
      {scroll && (
        <>
          <Title title="Skills" />
          <div className="flex h-full flex-1 flex-col items-center justify-center p-4">
            <Wrapper>
              <Center>Front-end</Center>
              <OutCircle>
                <Item>
                  <Image src={ReactSVG} alt="react" />
                </Item>
                <Item>
                  <Image src={NextJSSVG} alt="nextjs" />
                </Item>
                <Item>
                  <Image src={JavaScriptSVG} alt="javascript" />
                </Item>
                <Item>
                  <Image src={TypeScriptSVG} alt="typescript" />
                </Item>
              </OutCircle>
              <InCircle>
                <Item>
                  <Image src={RecoilSVG} alt="recoil" />
                </Item>
                <Item>
                  <Image src={ReduxSVG} alt="redux" />
                </Item>
                <Item>
                  <Image src={TailwindSVG} alt="tailwind" />
                </Item>
                <Item>
                  <Image src={StyledComponentsSVG} alt="styled-components" />
                </Item>
              </InCircle>
            </Wrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
