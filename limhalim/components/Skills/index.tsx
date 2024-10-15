import Image from "next/image";

import HTMLSVG from "../../public/icons/html.svg";
import CSSSVG from "../../public/icons/css.svg";
import ReactSVG from "../../public/icons/react_circle.png";
import NextJSSVG from "../../public/icons/next.js_circle.png";
import JavaScriptSVG from "../../public/icons/javascript_circle.svg";
import TypeScriptSVG from "../../public/icons/typescript_circle.png";
import RecoilSVG from "../../public/icons/recoil_circle.png";

import * as S from "./styled";
import useScrollHandler from "../../hooks/useScrollHandler";

const Skills = () => {
  const scroll = useScrollHandler(1000);

  return (
    <S.Container id="Skills">
      {scroll && (
        <S.ContentBox>
          <S.Item>
            <S.Stack>
              <Image
                src={HTMLSVG}
                alt="html"
                loading="lazy"
                width={120}
                height={120}
              />
            </S.Stack>
            <S.Box>
              웹 표준과 접근성을 준수하며, 시맨틱 태그를 사용하여
              SEO(검색엔진최적화)를 고려합니다.{" "}
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image
                src={CSSSVG}
                alt="css"
                loading="lazy"
                width={120}
                height={120}
              />
            </S.Stack>
            <S.Box>
              각 속성의 성격과 동작원리를 이해하며 사용하고 있습니다. 미디어
              쿼리를 통한 반응형 웹 디자인을 구현할 수 있습니다.
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image src={JavaScriptSVG} alt="javascript" loading="lazy" />
            </S.Stack>
            <S.Box>
              ES6 문법을 사용하여 코드를 작성할 수 있으며, 이벤트 처리와 비동기
              처리를 다룰 수 있습니다.
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image src={TypeScriptSVG} alt="typescript" loading="lazy" />
            </S.Stack>
            <S.Box>
              정적 타입을 활용하여 코드의 명확성과 안정성을 높이고 있습니다.
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image src={ReactSVG} alt="react" loading="lazy" />
            </S.Stack>
            <S.Box>
              상태 관리와 생명주기 메서드를 적절히 활용하며, 다양한 Hook의 동작
              원리를 이해하고 사용하고 있습니다.
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image src={NextJSSVG} alt="nextjs" loading="lazy" />
            </S.Stack>
            <S.Box>
              서버사이드 렌더링(SSR)과 정적 생성(SSG) 기능을 활용해 성능을
              최적화하고 있습니다.
            </S.Box>
          </S.Item>

          <S.Item>
            <S.Stack>
              <Image src={RecoilSVG} alt="recoil" loading="lazy" />
            </S.Stack>
            <S.Box>
              컴포넌트 간 상태를 효율적으로 관리하고 비동기 상태의 흐름을
              제어하는 데 익숙합니다.
            </S.Box>
          </S.Item>
        </S.ContentBox>
      )}
    </S.Container>
  );
};

export default Skills;
