import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Menu from "@/components/common/Menu";

import * as S from "./styled";
import WaveAnimation from "../WaveAnimation";

const Contents = () => {
  const sections: string[] = ["About", "Skills", "Projects", "Contact"];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 초기에도 isMobile 상태를 설정

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollPosition =
    typeof window !== "undefined" && sessionStorage.getItem("scrollPosition");

  useEffect(() => {
    if (scrollPosition) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(scrollPosition));
      });
    }

    if (typeof window !== "undefined")
      sessionStorage.removeItem("scrollPosition");
  }, [scrollPosition]);

  const scrollToSection = (sectionId: number) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      offset: -50,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <S.Container
      id="Contents"
      className="z-10 flex min-h-screen w-full items-center justify-center bg-[#42d17ed8] px-60"
    >
      <WaveAnimation />

      {isMobile ? (
        <div className="flex w-full">
          {/** Menu */}
          <div className="flex w-full items-center justify-between">
            <div className="z-10 flex w-full flex-col items-center justify-center gap-6">
              {sections.map((section, index) => (
                <Link
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  onClick={() => scrollToSection(index)}
                >
                  <Menu category={section.toUpperCase()} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="flex flex-col items-center justify-center border-r-[0.2rem] px-28">
            <S.Text>© 2024</S.Text>
            <S.Text>Lim, Ha-Lim.</S.Text>
            <S.Text>All rights Reserved.</S.Text>
          </div>
          {/** Menu */}
          <div className="flex w-full items-center justify-between">
            <div className="z-10 flex w-full flex-col gap-10 px-8">
              {sections.map((section, index) => (
                <Link
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  onClick={() => scrollToSection(index)}
                >
                  <Menu category={section.toUpperCase()} />
                </Link>
              ))}
            </div>
            <S.MouseBox>
              <S.Mouse>
                <S.Scroller />
              </S.Mouse>
              <S.H1>Scroll down</S.H1>
            </S.MouseBox>
          </div>
        </div>
      )}
    </S.Container>
  );
};

export default Contents;
