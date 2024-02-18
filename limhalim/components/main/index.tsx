import Contents from "@/components/TableOfContents";
import AboutPage from "../About";
import SkillsPage from "../Skills";
import ProjectsPage from "../Projects";
import ContactPage from "../Contact";

import Bubble from "@/components/Bubble";
import Footer from "@/components/Layout/Footer";
import HandleWheel from "@/utils/handleWheel";

const Main = () => {
  const sections = ["Contents", "About", "Skills", "Projects", "Contact"];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
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

      <Footer />
    </main>
  );
};

const getPageComponent = (section: string) => {
  switch (section) {
    case "Contents":
      return <Contents />;
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
