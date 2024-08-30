import { StaticImageData } from "next/image";

import Readyou from "../public/images/readyou.png";
import WorryBox from "../public/images/worry-box.webp";
import StockOneQ from "../public/images/StockOneQ.webp";
import LivePick from "../public/images/LivePick.webp";

import NextJSSVG from "../public/icons/nextjs.webp";
import ReactSVG from "../public/icons/react.webp";
import JavaScriptSVG from "../public/icons/javascript.webp";
import TypeScriptSVG from "../public/icons/typescript.webp";
import RecoilSVG from "../public/icons/recoil.webp";
import StyledComponentsSVG from "../public/icons/styled-components.webp";
import SocketSVG from "../public/icons/socket.webp";

interface ProjectItem {
  title: string;
  subTitle: string;
  tagList: string[];
  githubURL?: string;
  siteURL?: string;
  imgURL: StaticImageData;
  overView: string;
  infoList: [string, string, string, StaticImageData[]];
  whatDidIdo: string[];
  moreList?: { [key: string]: [string, string?] };
}

interface ProjectById {
  [key: string]: ProjectItem;
}

export const dataById: ProjectById = {
  0: {
    title: "테오의스프린트17기, READYOU",
    subTitle: "10분 README 완성!, READYOU",
    tagList: ["웹개발", "반응형", "드래그앤드롭"],
    githubURL: "https://github.com/Read-U/readyou-front",
    siteURL: "https://readyou.vercel.app/",
    imgURL: Readyou,
    overView:
      "협업 프로세스를 경험하는 테오의 스프린트 17기에 FE 개발자로 참여하여 단기간으로 진행한 팀 프로젝트입니다. READYOU는 README 파일에 추가할 항목을 선택하여 내용을 기입하면 자동으로 마크 다운을 작성해주는 서비스입니다.",
    infoList: [
      "2024.04",
      "디자이너 1, 프론트 5, 백 1",
      "웹 프론트 개발, 드래그 앤 드롭 구현, 사용자 input 마크다운으로 가공, 프리뷰 동기화",
      [NextJSSVG, TypeScriptSVG, RecoilSVG, StyledComponentsSVG],
    ],
    whatDidIdo: [
      "프로젝트 리더",
      "반응형 적용",
      "드래그 앤 드롭 구현",
      "사용자 input 가공",
      "프리뷰 동기화",
    ],
    moreList: {
      "PC와 모바일에서 동작하는 반응형 웹 구현": [
        "사용자가 모바일 환경에서도 동일하게 사용할 수 있도록 CSS의 미디어 쿼리를 이용하여 반응형을 추가로 구현하였습니다.",
      ],
      "드래그 앤 드롭 기능 구현": [
        "react-beautiful-dnd 라이브러리를 활용하여 드래그 앤 드롭 기능을 구현하였습니다. 이를 통해 사용자는 리드미에 추가 될 각 요소를 손쉽게 이동할 수 있게 되었습니다. 특히, 요소 간의 자연스러운 이동과 배치 변경을 위해 드래그 앤 드롭 동작의 시각적 피드백에 신경 썼습니다.",
      ],
      "공통 컴포넌트 처리": [
        "드래그 앤 드롭 대상 요소들을 보다 효율적으로 관리하기 위해 각 요소를 공통 컴포넌트화하였습니다. 이를 통해 중복 코드를 줄이고, 유지보수성을 높였습니다. 다양한 타입의 요소들을 하나의 컴포넌트로 관리하면서도 각 요소의 특성에 맞는 동작을 할 수 있도록 유연한 컴포넌트 구조를 설계하였습니다.",
      ],
      "사용자 입력 처리 및 프리뷰 동기화": [
        "사용자가 입력한 내용을 실시간으로 마크다운(Markdown) 형식으로 변환하여 프리뷰 섹션에 동기화하는 기능을 구현하였습니다. 사용자가 입력한 텍스트가 프리뷰 섹션에 즉시 반영될 수 있도록 최적화하여 사용자 경험을 향상시켰습니다. 이를 위해 useMemo와 같은 최적화 기법을 사용하여 변경되지 않은 부분은 재렌더링하지 않도록 함으로써 성능을 최적화하였습니다.",
      ],
      "Recoil을 활용한 상태 관리": [
        "드래그 앤 드롭뿐만 아니라 요소의 추가, 삭제, 이동 등에 의해 발생하는 상태 변화를 보다 효율적으로 관리하기 위해 Recoil 상태 관리 라이브러리를 도입하였습니다. Recoil을 통해 복잡한 상태 변화와 관련된 로직을 간결하게 처리할 수 있었고, 이는 전체 애플리케이션의 반응성을 높이는 데 크게 기여하였습니다.",
      ],
    },
  },
  1: {
    title: "구름톤유니브2기 벚꽃톤 프로젝트",
    subTitle: "걱정이 일상을 방해하지 못하도록, 걱정보관함",
    tagList: ["웹개발", "PWA", "푸시알림"],
    githubURL: "https://github.com/9oormthon-univ/2024_BEOTKKOTTHON_TEAM_8_FE",
    imgURL: WorryBox,
    overView:
      "구름에서 주관하는 IT 연합 동아리인 구름톤유니브 2기 벚꽃톤에 참여한 팀 프로젝트입니다. 해당 프로젝트의 슬로건은 '불쑥 찾아오는 걱정이 당신을 방해하지 못하도록.'이며, 걱정 시간을 설정하고 해당 걱정 시간에만 걱정을 마주하는 습관을 통해 현재에 집중하면서도 수많은 걱정에 건강하게 대처할 수 있도록 도와주는 서비스입니다. \n \n 10일 간의 한정된 시간 속에서 매일 밤 데일리스크럼 시간을 가졌습니다. 팀원들과 업무를 공유하고 협업하는 과정에서 꼭 필요한 업무만을 가지고 작업하는 방식을 통해 작업의 효율성을 경험하고 개발의 능률을 향상시킬 수 있었습니다. 또한 첫 해커톤과 첫 배포, 첫 PWA 적용 등 짧은 기간동안 너무나도 많은 것들을 배우고 경험한 뜻깊은 프로젝트입니다.",
    infoList: [
      "2024.03.13 ~ 2024.03.24",
      "기획 1, 디자이너 1, 프론트 2, 백 2",
      "웹 프론트 개발, PWA 적용, FCM 푸시알림 구현",
      [NextJSSVG, TypeScriptSVG, RecoilSVG, StyledComponentsSVG],
    ],
    whatDidIdo: [
      "가입/로그인",
      "과거의나로부터편지받기",
      "미래의나에게편지쓰기",
      "걱정넣기",
      "걱정레포트보여주기",
    ],
    moreList: {
      "SSR 비활성화하여 react-wordcloud 라이브러리 통해 걱정 레포트 페이지 개발":
        [
          "브라우저 전용 API 및 DOM 조작이 필요한 라이브러리인 react-wordcloud는 컴포넌트를 클라이어트 사이드에서만 렌더링하기 때문에 서버 사이드 렌더링 시점에 사용하려고 할 때 문제가 발생하는 것을 확인했습니다. 따라서, 'next/dynamic'을 사용하여 서버 사이드 렌더링을 비활성화 하여 우회하고 클라이언트 사이드에서만 컴포넌트를 동적으로 불러오도록 하여 문제를 해결하였습니다.",
        ],
      "PWA 적용": [
        "웹/앱 종류 중 하나인 PWA 기술을 도입하였습니다. 모바일 사용자가 홈화면에 바로가기 형태로 웹 사이트를 추가할 수 있게 하여 네이티브 앱과 유사한 형태로 제공하여 사용성을 높이고자 하였습니다.",
      ],
      "Firebase Cloud Messaging(FCM)을 사용한 웹에서의 푸시알림 구현": [
        "서비스 워커를 등록하여 백그라운드 메시징 서비스를 통해 사용자가 앱에 접속하지 않아도 오프라인 상태에서 푸시 알림을 제공하고자 하였습니다. \n \n 1. 사용자의 브라우저에서 Notification.requestPermission()을 통해 푸시 알림 권한 요청 \n 2. 메시징 서비스 getToken()를 통해 vapidKey를 발급 받아서 현재 사용자 디바이스의 FCM 등록 토큰을 얻는다. 이후 해당 토큰을 서버의 특정 엔드포인트로 POST 요청을 보내 토큰을 등록한다. \n 3. 백그라운드에서의 메세지 수신을 위한 서비스워커 등록 \n 4. 메시징 서비스 onBackgroundMessage()를 통해 백그라운드 상태에서 FCM에서 보낸 푸시 알림 메시지를 실시간으로 수신한다.",
      ],
      "새로고침 시 전역 상태가 초기화 되는 현상 해결": [
        "Recoil로 관리하는 상태는 클라이언트 사이드에서만 유지되므로 페이지를 새로고침하면 서버 측에서 초기 상태를 가져와 다시 렌더링하기 때문에 recoil 상태가 초기화되는 것을 알 수 있었습니다. 이를 해결하기 위해 recoil-persist 라이브러리를 사용하여 sesstionStorage 웹 스토리지를 사용하고자 하였습니다. \n  하지만, 서버 사이드 렌더링 환경에서는 window 객체가 정의되어 있지 않기 때문에 서버 사이드 페이지가 클라이언트에 로드될 때 까지 sessionStorage에 접근이 불가능하였습니다. 따라서, 아래 코드를 추가하여 sessionStorage를 사용하였고, 새로고침 시 전역 상태가 초기화 되는 문제를 해결할 수 있었습니다.",
        "const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;",
      ],
    },
  },
  2: {
    title: "IT연합동아리UMC 하계 프로젝트",
    subTitle: "재고 관리의 모든 것, 스톡원큐",
    tagList: ["웹개발", "페이지네이션", "CRUD"],
    githubURL: "https://github.com/stockOneQ",
    imgURL: StockOneQ,
    overView:
      "대학생 IT 연합동아리인 UMC(University Makeus Challenge)의 하계 프로젝트로 참여한 팀 프로젝트입니다. 스톡원큐는 전국 각지의 카페 자영업자를 위한 카페 맞춤 관리형 서비스로 기존 ERP 서비스와는 다른, 재고 관리를 보다 편리한 방향으로 매장 운영을 원활히 할 수 있는 서비스입니다.",
    infoList: [
      "2023.07 ~ 2023.08",
      "기획 1, 디자이너 1, 프론트 3, 백 4",
      "게시판 페이지 웹 프론트 개발",
      [NextJSSVG, TypeScriptSVG, RecoilSVG, StyledComponentsSVG],
    ],
    whatDidIdo: [
      "게시글CRUD",
      "게시글정렬및검색",
      "댓글및대댓글CRUD",
      "페이지네이션",
    ],
    moreList: {
      "기획자 및 디자이너와의 첫 협업": [
        "저는 어떠한 일이라도 완벽하게 이해하고 넘어가려는 성향을 가지고 있습니다. 개발자라면 자신이 만드는 서비스에 대해 깊이 이해하고 숙지하는 것이 정말 중요하다고 생각하기 때문입니다. 그렇기에 기획자의 목적과 목표 그리고 비전을 명확히 이해할 때까지 왜 이 기능이 있어야 하는지 이 기능이 꼭 필요한지 끊임없이 질문하며 사용자의 요구와 비즈니스 목표를 만족시키기 위해 노력하였습니다. \n \n 디자이너와 협업함으로써, 디자이너가 바라보는 관점에서의 사용자 경험 디자인의 원리를 이해할 수 있었습니다. 협업 과정에서 서로의 작업 과정과 제약 사항을 이해하는 것은 팀 내 커뮤니케이션을 강화시켜 더 나은 의사결정을 하도록 도왔습니다. 각자 다른 시각에서 바라보며 기술적으로 해결할 수 없는 문제를 해결하고, 기술적인 가능성과 디자인적인 비전을 결합하여 사용자에게 긍정적인 경험을 제공할 수 있었습니다. \n \n 프론트엔드 개발자로서 단순히 기능 구현에만 책임을 가지는 것에 그치는 것이 아닌, 계속해서 질문하며 기획자와 디자이너의 의도를 파악하고 개선하며 사용성에 신경 쓰려 하였습니다.",
      ],
      "첫 API 통신 및 백엔드 개발자와의 첫 협업": [
        "REST 아키텍처 스타일을 이해함으로써, 클라이언트와 서버 간의 통신 방법을 배울 수 있습니다. 저는 와이어프레임과 기능명세서를 꼼꼼히 확인 후 이름 바탕으로 어떤 API가 추가로 필요한지, 어떤 API가 누락됐는지 등 기술적 요소를 고려하여 더 나은 통신에 대해 고민하고 의견을 제시하였습니다.",
      ],
      "Promise.allsettled() 사용하여 게시글 삭제 성능 향상시키기": [
        "기존 map만을 사용하여 일일이 API 통신을 보내고 있는 것에 대해 다른 프론트엔드 팀원으로부터 최악의 경우 성능 저하의 가능성에 대하여 피드백을 받았습니다. 저는 이를 해결하기 위해 찾아보던 중 여러 API를 병렬적으로 실행시키기 위한 메소드 Promise.all과 Promise.allSettled를 찾게 되었습니다. 차이점을 찾아보니 all의 경우 하나라도 reject가 되면 모든 promise들이 catch로 빠지게 되면서 성공한 promise들도 무시돼서 다시 보내야하는 번거로움이 있는데, allSettled의 경우 각 promise에 대한 처리 상태와 결과 값을 배열에 같이 보내져서, rejected된 promise에 대해서 분기 처리가 가능한 것을 알 수 있었습니다. 여러 개의 게시글을 선택하여 삭제하는 해당 기능의 경우 allSettled가 더 알맞다고 판단하여 이를 통해 삭제 성능을 향상시키고자 하였고, 백엔드분과 협의하여 삭제 기능에 대한 예외처리 로직까지 추가하여 사용성을 높일 수 있었습니다.",
      ],
    },
  },
  3: {
    title: "2023 하계 인턴",
    subTitle: "(주)위드플러스 자체 플랫폼 교육 서비스, Live Pick",
    tagList: ["기획", "디자인", "웹개발", "socket통신"],
    siteURL: "https://www.withplus.live/content/pick",
    imgURL: LivePick,
    overView:
      "4학년 1학기, 여름방학 2개월 간 인턴을 수행하며 처음부터 끝까지 모든 개발에 참여한 팀 프로젝트입니다. Live Pick은 매 턴마다 숫자 경매를 실시하여 최종 숫자의 합이 가장 낮은 팀이 승리하는 의사결정 훈련 게임입니다. 마이너스 숫자 경매인 '노땡스'를 모티브하여 제작 된 온라인 교육 서비스입니다.",
    infoList: [
      "2023.07 ~ 2023.08",
      "프론트 2, 백 1",
      "모바일 사용자 접속자 관리를 위한 매니저 페이지 전반 프론트 개발 및 socket 통신",
      [ReactSVG, JavaScriptSVG, SocketSVG, StyledComponentsSVG],
    ],
    whatDidIdo: ["PC매니저페이지"],
  },
};
