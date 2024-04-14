const HandleWheel = (
  event: React.WheelEvent<HTMLDivElement>,
  index: number,
  sections: string[],
) => {
  let delta = 0; // 스크롤 양을 나타내는 변수
  delta = event.deltaY / 120; // 120으로 나누는 이유는 일반적으로 브라우저에서 deltaY 값이 120의 배수로 반환되기 때문

  let moveTop = window.scrollY; // 다음에 스크롤 될 위치를 나타내는 변수, 현재 스크롤 위치로 초기값 설정

  // 휠을 아래로 돌렸을 때 다음 섹션으로 이동하는 부분
  if (delta > 0 && index !== sections.length - 1) {
    try {
      moveTop =
        window.pageYOffset +
        document.getElementById(sections[index + 1])!.getBoundingClientRect()
          .top; // 다음 섹션의 상대적 위치를 계산하여 할당
    } catch (error) {
      console.error(error);
    }
  }
  // 휠을 위로 돌렸을 때 이전 섹션으로 이동하는 부분
  else if (delta < 0 && index !== 0) {
    try {
      moveTop =
        window.pageYOffset +
        document.getElementById(sections[index - 1])!.getBoundingClientRect()
          .top; // 이전 섹션의 상대적 위치를 계산하여 할당
    } catch (error) {
      console.error(error);
    }
  }

  // 계산 된 위치로 부드러운 스크롤 이동을 수행
  return window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
};

export default HandleWheel;
