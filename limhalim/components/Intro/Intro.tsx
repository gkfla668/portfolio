import { useEffect, useState } from "react";
import * as S from "./styles";
import useScrollHandler from "@/hooks/useScrollHandler";

const Intro = () => {
  const completionWord = "LIM HALIM PORTFOLIO";

  const scroll = useScrollHandler(200);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0); // 현재 타이핑 한 글자의 index

  useEffect(() => {
    setIndex(0);
  }, [scroll]);

  useEffect(() => {
    if (typeof window !== "undefined")
      sessionStorage.removeItem("scrollPosition");

    let typingInterval: NodeJS.Timeout;

    // setInterval 함수를 사용하여 일정 간격으로 콜백 함수 호출
    if (index < completionWord.length) {
      typingInterval = setInterval(() => {
        setTitle(() => {
          const nextIndex = index + 1;
          const result = completionWord.substring(0, nextIndex);

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
    <S.Container>
      <S.WaveCircle>
        <div></div>
        <div></div>
        <div></div>
      </S.WaveCircle>

      <div className="relative flex w-full flex-col items-center justify-center ">
        <S.Title>{title}</S.Title>

        {index === completionWord.length && (
          <div className="flex flex-col items-center justify-center gap-20 transition-all duration-200">
            <S.Text>© 2024 Lim, Ha-Lim. All rights Reserved.</S.Text>
            <S.MouseBox>
              <S.Mouse>
                <S.Scroller />
              </S.Mouse>
              <S.H1>Scroll down</S.H1>
            </S.MouseBox>
          </div>
        )}
      </div>
    </S.Container>
  );
};

export default Intro;
