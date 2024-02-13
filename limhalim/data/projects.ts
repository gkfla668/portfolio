import { StaticImageData } from "next/image";

import MeQ from "../public/images/MeQ.png";
import Damdam from "../public/images/Damdam.jpg";
import StockOneQ from "../public/images/StockOneQ.png";
import LivePick from "../public/images/LivePick.png";
import Wanted from "../public/images/WantedClone.png";

import NextJSSVG from "../public/icons/nextjs.svg";
import ReactSVG from "../public/icons/react.svg";
import JavaScriptSVG from "../public/icons/javascript.svg";
import TypeScriptSVG from "../public/icons/typescript.svg";
import RecoilSVG from "../public/icons/recoil.svg";
import ReduxSVG from "../public/icons/redux.svg";
import StyledComponentsSVG from "../public/icons/styled-components.svg";
import TailwindCSSSVG from "../public/icons/tailwindCSS.svg";
import SocketSVG from "../public/icons/socket.svg";

interface DataItem {
  title: string;
  subTitle: string;
  tagList: string[];
  githubURL?: string;
  siteURL?: string;
  imgURL: StaticImageData;
  overView: string;
  infoList: [string, string, string, StaticImageData[]];
}

interface DataById {
  [key: string]: DataItem;
}

export const dataById: DataById = {
  1: {
    title: "아주대학교 졸업 프로젝트",
    subTitle: "더 건강한 식품 경험을 위해, Me-Q.",
    tagList: ["기획", "웹개발", "Kakao지도API"],
    githubURL: "https://github.com/Meee-Q",
    imgURL: MeQ,
    overView:
      "아주대학교 마지막 학기에 수강하였던 '미디어 프로젝트' 수업에서 참여했던 팀 프로젝트입니다. 해당 프로젝트는 [위치 기반 서비스]와 [사용자 알레르기 정보]를 통합하여 편안하고 안전하게 음식을 섭취할 수 있는 맞춤형 식사 솔루션을 제공하는 서비스입니다.",
    infoList: [
      "2023.10 ~ 2023.12",
      "디자이너1, 프론트1, 백1",
      "기획 및 사이트 전반 프론트 개발",
      [NextJSSVG, TypeScriptSVG, RecoilSVG, StyledComponentsSVG],
    ],
  },
  2: {
    title: "2023 경기청년갭이어 프로그램",
    subTitle: "창의적 학습 도구, 담담.",
    tagList: ["웹개발", "반응형", "실시간채팅", "socket"],
    githubURL: "https://github.com/freedamdam",
    imgURL: Damdam,
    overView:
      "경기도에서 주관하는 2023 경기청년갭이어 프로그램에 참여하여 약 3개월 간 진행한 팀 프로젝트입니다. 학습부터 토의, 토론까지 체계적인 학습 및 실전 경험을 통해 정보 처리 능력, 창의적 사고 등의 역량을 갖추도록 돕는 서비스입니다.",
    infoList: [
      "2023.08 ~ 2023.11",
      "기획1, 프론트1, 백1",
      "사이트 전반 프론트 개발 및 실시간 채팅 구현",
      [NextJSSVG, TypeScriptSVG, ReduxSVG, StyledComponentsSVG, TailwindCSSSVG],
    ],
  },
  3: {
    title: "대학생 IT 연합동아리 UMC 하계 프로젝트",
    subTitle: "재고 관리의 모든 것, 스톡원큐.",
    tagList: ["웹개발", "CRUD", "페이지네이션", "API"],
    githubURL: "https://github.com/stockOneQ",
    imgURL: StockOneQ,
    overView:
      "대학생 IT 연합동아리인 UMC(University Makeus Challenge)의 하계 프로젝트로 참여한 팀 프로젝트입니다. 스톡원큐는 전국 각지의 카페 자영업자를 위한 카페 맞춤 관리형 서비스로 기존 ERP 서비스와는 다른, 재고 관리를 보다 편리한 방향으로 매장 운영을 원활히 할 수 있는 서비스입니다.",
    infoList: [
      "2023.07 ~ 2023.08",
      "기획1, 디자이너1, 프론트3, 백4",
      "게시판 페이지 웹 프론트 개발",
      [NextJSSVG, TypeScriptSVG, RecoilSVG, StyledComponentsSVG],
    ],
  },
  4: {
    title: "2023 하계 현장실습",
    subTitle: "(주)위드플러스 자체 플랫폼 교육 서비스, Live Pick",
    tagList: ["디자인", "웹개발", "socket"],
    siteURL: "https://www.withplus.live/content/pick",
    imgURL: LivePick,
    overView:
      "4학년 1학기, 여름방학 2개월 간 인턴을 수행하며 처음부터 끝까지 모든 개발에 참여한 팀 프로젝트입니다. Live Pick은 매 턴마다 숫자 경매를 실시하여 최종 숫자의 합이 가장 낮은 팀이 승리하는 의사결정 훈련 게임입니다. 마이너스 숫자 경매인 '노땡스'를 모티브하여 제작 된 온라인 교육 서비스입니다.",
    infoList: [
      "2023.07 ~ 2023.08",
      "프론트2, 백1",
      "모바일 사용자 접속자 관리를 위한 매니저 페이지 전반 프론트 개발 및 socket 통신",
      [ReactSVG, JavaScriptSVG, SocketSVG, StyledComponentsSVG],
    ],
  },
  5: {
    title: "(주)원티드 웹 사이트 클론 프로젝트",
    subTitle: "",
    tagList: ["퍼블리싱", "소셜로그인"],
    githubURL: "https://github.com/wanted-cloneproject",
    siteURL: "https://wanted-clone-project.web.app/",
    imgURL: Wanted,
    overView:
      "대학생 IT 연합동아리인 UMC(University Makeus Challenge)의 미션 과제로, (주)원티드랩이 소유하고 있는 웹 사이트의 클론 코딩을 위해 만들어진 개인 프로젝트입니다. Flex와 Grid 속성을 통해 가장 기본적인 레이아웃을 구성하는 방법을 배울 수 있었습니다.",
    infoList: [
      "2023.04 ~ 2023.06",
      "개인",
      "원티드 웹 사이트 클론 코딩 (메인, 이력서, AI 합격 예측, 로그인 페이지)",
      [ReactSVG, JavaScriptSVG, TailwindCSSSVG],
    ],
  },
};
