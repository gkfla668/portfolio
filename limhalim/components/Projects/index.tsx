import Slide from "@/components/Slide";

import * as S from "./styles";
import useScrollHandler from "@/hooks/useScrollHandler";

const Projects = () => {
  const scroll = useScrollHandler(1000);

  return (
    <S.Container id="Projects">
      {scroll && (
        <S.Box>
          <Slide />
        </S.Box>
      )}
    </S.Container>
  );
};

export default Projects;
