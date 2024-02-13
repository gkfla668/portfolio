import { useRecoilValue } from "recoil";
import { isHomeState } from "@/recoil/states";
import Intro from "@/components/Intro/Intro";
import Bubble from "@/components/Bubble";
import Circle from "@/components/Circle";
import Main from "./main";

export default function Home() {
  const isHome = useRecoilValue(isHomeState);

  return (
    <div>
      <Bubble />
      <Circle />

      {getPageComponent(isHome)}
    </div>
  );
}

const getPageComponent = (isHome: boolean) => {
  if (isHome) return <Main />;

  return <Intro />;
};
