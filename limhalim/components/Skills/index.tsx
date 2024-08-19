import Image from "next/image";
import { useEffect, useState } from "react";
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
    <S.Container id="Skills">
      {scroll && (
        <S.ContentBox>
          <S.StackCircle>
            <S.Center>{stack}</S.Center>
            <S.OutCircle>
              <S.Item onClick={() => setStack("React")}>
                <Image src={ReactSVG} alt="react" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("NextJS")}>
                <Image src={NextJSSVG} alt="nextjs" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("JavaScript")}>
                <Image src={JavaScriptSVG} alt="javascript" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("TypeScript")}>
                <Image src={TypeScriptSVG} alt="typescript" loading="lazy" />
              </S.Item>
            </S.OutCircle>
            <S.InCircle>
              <S.Item onClick={() => setStack("Recoil")}>
                <Image src={RecoilSVG} alt="recoil" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("Redux-toolkit")}>
                <Image src={ReduxSVG} alt="redux" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("TailwindCSS")}>
                <Image src={TailwindSVG} alt="tailwind" loading="lazy" />
              </S.Item>
              <S.Item onClick={() => setStack("Styled-components")}>
                <Image
                  src={StyledComponentsSVG}
                  alt="styled-components"
                  loading="lazy"
                />
              </S.Item>
            </S.InCircle>
          </S.StackCircle>
        </S.ContentBox>
      )}
    </S.Container>
  );
};

export default Skills;
