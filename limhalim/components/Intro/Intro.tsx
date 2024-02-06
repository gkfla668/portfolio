import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isHomeState } from "@/recoil/states";
import styled from "styled-components";
import { drift } from "@/styles/animation";

import * as S from "./styledIntro";

const WaveCircle = styled.span`
  div {
    opacity: 0.2;
    position: absolute;
    top: 4%;
    left: 50%;

    background: #42d17e53;
    width: 500px;
    height: 500px;

    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 50%;
    border-radius: 40%;
  }

  :nth-child(1) {
    animation: ${drift} 12s infinite linear;
  }
  :nth-child(2) {
    animation: ${drift} 14s infinite linear;
  }
  :nth-child(3) {
    animation: ${drift} 16s infinite linear;
  }
`;

const Intro = () => {
  const completionWord = "LIM HALIM PORTFOLIO";

  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0); // 현재 타이핑 한 글자의 index

  const setIsHome = useSetRecoilState(isHomeState);

  useEffect(() => {
    sessionStorage.removeItem("scrollPosition");

    let typingInterval: NodeJS.Timeout;

    // setInterval 함수를 사용하여 일정 간격으로 콜백 함수 호출
    if (index < completionWord.length) {
      typingInterval = setInterval(() => {
        setTitle(() => {
          const nextIndex = index + 1;
          let result = completionWord.substring(0, nextIndex);

          setIndex(nextIndex);

          if (nextIndex === completionWord.length) {
            clearInterval(typingInterval);
          }

          return result;
        });
      }, 200);
    }

    // 컴포넌트 언마운트 시 clearInterval 호출하여 메모리 누수 방지
    return () => {
      clearInterval(typingInterval);
    };
  }, [index, completionWord]);

  return (
    <S.Container className="relative flex min-h-screen w-full items-center justify-center">
      <WaveCircle>
        <div></div>
        <div></div>
        <div></div>
      </WaveCircle>

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center ">
        <S.Title>{title}</S.Title>

        {index === completionWord.length && (
          <div className="flex flex-col items-center justify-center gap-20 transition-all duration-200">
            <S.Text>© 2024 Lim, Ha-Lim. All rights Reserved.</S.Text>
            <S.Button onClick={() => setIsHome(true)}>
              <span></span>
              <span></span>
              <span></span>
            </S.Button>
          </div>
        )}
      </div>
    </S.Container>
  );
};

export default Intro;
