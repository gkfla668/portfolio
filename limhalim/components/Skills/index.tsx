import Image from "next/image";
import { useEffect, useState } from "react";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";

import ReactSVG from "../../public/icons/react_circle.png";
import NextJSSVG from "../../public/icons/next.js_circle.png";
import JavaScriptSVG from "../../public/icons/javascript_circle.svg";
import TypeScriptSVG from "../../public/icons/typescript_circle.png";
import RecoilSVG from "../../public/icons/recoil_circle.png";
import ReduxSVG from "../../public/icons/redux_circle.webp";
import TailwindSVG from "../../public/icons/tailwind_circle.png";
import StyledComponentsSVG from "../../public/icons/styledcomponents_circle.png";

import * as S from "./styled";

const Skills = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [stack, setStack] = useState<string>("Front-end");

  useEffect(() => {
    setStack("Front-end");

    const threshold = 1000;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, [scroll]);

  return (
    <div
      id="Skills"
      className="flex min-h-screen w-full flex-col px-16 py-20 md:px-32"
    >
      {scroll && (
        <>
          <Title title="Skills" />
          <div className="relative flex h-full flex-1 flex-col items-center justify-center p-4">
            <S.Wrapper>
              <S.Center>{stack}</S.Center>
              <S.OutCircle>
                <S.Item onClick={() => setStack("React")}>
                  <Image src={ReactSVG} alt="react" />
                </S.Item>
                <S.Item onClick={() => setStack("NextJS")}>
                  <Image src={NextJSSVG} alt="nextjs" />
                </S.Item>
                <S.Item onClick={() => setStack("JavaScript")}>
                  <Image src={JavaScriptSVG} alt="javascript" />
                </S.Item>
                <S.Item onClick={() => setStack("TypeScript")}>
                  <Image src={TypeScriptSVG} alt="typescript" />
                </S.Item>
              </S.OutCircle>
              <S.InCircle>
                <S.Item onClick={() => setStack("Recoil")}>
                  <Image src={RecoilSVG} alt="recoil" />
                </S.Item>
                <S.Item onClick={() => setStack("Redux-toolkit")}>
                  <Image src={ReduxSVG} alt="redux" />
                </S.Item>
                <S.Item onClick={() => setStack("TailwindCSS")}>
                  <Image src={TailwindSVG} alt="tailwind" />
                </S.Item>
                <S.Item onClick={() => setStack("Styled-components")}>
                  <Image src={StyledComponentsSVG} alt="styled-components" />
                </S.Item>
              </S.InCircle>
            </S.Wrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
