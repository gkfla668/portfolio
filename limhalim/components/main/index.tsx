import { useEffect } from "react";

import Intro from "../Intro/Intro";
import AboutPage from "../About";
import SkillsPage from "../Skills";
import ProjectsPage from "../Projects";
import ContactPage from "../Contact";

import HandleWheel from "@/utils/handleWheel";
import * as S from "./styles";

import Bubble from "../Bubble";

interface BlogPost {
  title: string;
  link: string;
  contentSnippet?: string;
}

const Main = ({ latestPosts }: { latestPosts: BlogPost[] }) => {
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
          <S.PageContainerStyle
            key={section}
            id={section}
            onWheel={e => HandleWheel(e, index, sections)}
          >
            {getPageComponent(section, latestPosts)}
          </S.PageContainerStyle>
        ))}
      </div>
    </S.Container>
  );
};

const getPageComponent = (section: string, latestPosts: BlogPost[]) => {
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
      return <ContactPage latestPosts={latestPosts} />;
    default:
      return;
  }
};

export default Main;
