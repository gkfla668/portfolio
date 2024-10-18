import { useEffect } from "react";

import Intro from "../Intro/Intro";
import AboutPage from "../About";
import SkillsPage from "../Skills";
import ProjectsPage from "../Projects";
import ContactPage from "../Contact";

import HandleWheel from "@/utils/handleWheel";
import * as S from "./styles";

import Bubble from "../Bubble";
import Title from "@/components/common/SectionTitle";

interface BlogPost {
  title: string;
  link: string;
  contentSnippet?: string;
}

const Main = ({ latestPosts }: { latestPosts: BlogPost[] }) => {
  const sections = ["Intro", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const scrollPosition =
      typeof window !== "undefined" && sessionStorage.getItem("scrollPosition");

    console.log(scrollPosition);
    if (scrollPosition) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(scrollPosition));
      });
    }

    if (typeof window !== "undefined")
      sessionStorage.removeItem("scrollPosition");
  }, []);

  return (
    <S.Container>
      <Bubble />
      <S.Box>
        {sections.map((section, index) => (
          <S.SectionContainer
            key={section}
            id={section}
            onWheel={e => HandleWheel(e, index, sections)}
          >
            {section !== "Intro" && section !== "Contact" && (
              <Title title={section} />
            )}
            <S.ContentBox>
              {getPageComponent(section, latestPosts)}
            </S.ContentBox>
          </S.SectionContainer>
        ))}
      </S.Box>
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
