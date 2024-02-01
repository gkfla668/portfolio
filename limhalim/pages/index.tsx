import { useRecoilValue } from "recoil";
import { homeSlideState } from "@/recoil/states";
import Main from "./main";
import Intro from "@/components/Intro/Intro";
import Bubble from "@/components/Bubble";
import Circle from "@/components/Circle";

export default function Home() {
  const isNext = useRecoilValue(homeSlideState);

  return (
    <div id="Home">
      <Bubble />
      {/* <Circle /> */}
      {getPageComponent(isNext)}
    </div>
  );
}

const getPageComponent = (isNext: boolean) => {
  if (isNext) return <Main />;

  return <Intro />;
};
