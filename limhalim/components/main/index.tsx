import AboutPage from "../About";
import SkillsPage from "../Skills";
import ProjectsPage from "../Projects";
import ContactPage from "../Contact";

import HandleWheel from "@/utils/handleWheel";
import * as S from "./styles";
import Intro from "../Intro/Intro";
import Bubble from "../Bubble";
import { useEffect } from "react";

const Main = () => {
  const sections = ["Intro", "About", "Skills", "Projects", "Contact"];

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

  return (
    <S.Container className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <Bubble />
      <div className="z-10 flex w-full flex-col">
        {sections.map((section, index) => (
          <div
            key={section}
            id={section}
            onWheel={e => HandleWheel(e, index, sections)}
          >
            {getPageComponent(section)}
          </div>
        ))}
      </div>
    </S.Container>
  );
};

const getPageComponent = (section: string) => {
  switch (section) {
    case "Intro":
      return <Intro />;
    case "About":
      return <AboutPage />;
    case "Skills":
      return <SkillsPage />;
    case "Projects":
      return <ProjectsPage />;
    case "Contact":
      return <ContactPage />;
    default:
      return;
  }
};

export default Main;
