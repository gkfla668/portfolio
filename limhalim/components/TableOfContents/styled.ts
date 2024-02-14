import { fadeIn, slideIn, scrollFlash } from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  animation: ${slideIn} 2s;
  position: relative;

  will-change: transform;
  animation-fill-mode: forwards;
  &:active,
  &:focus {
    will-change: auto; /* 애니메이션이 활성 상태가 아닐 때는 will-change를 제거 */
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    scale: 1.2;
    transition: all 0.4s;

    border-radius: 30%;
    padding: 0.2rem;
    box-shadow:
      0 0 2px #eee,
      0 0 4px #42d17d,
      0 0 8px #42d17d;
  }
`;

export const Text = styled.h1`
  color: #ffffffed;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  white-space: nowrap;

  animation: ${fadeIn} 6s;

  &:hover {
    scale: 1.2;
    transition: all 0.4s;
  }
`;

export const MouseBox = styled.div`
  margin-right: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  justify-content: center;
  align-items: center;
`;

export const Mouse = styled.div`
  width: 30px;
  height: 32px;

  padding: 8px 0px;

  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;

  display: flex;
  justify-content: center;
`;

export const Scroller = styled.div`
  width: 5px;
  height: 8px;
  border-radius: 40%;
  background-color: #fff;
  animation: ${scrollFlash} 2s infinite;
`;

export const H1 = styled.h1`
  font-family: "Kanit", sans-serif;
  color: white;

  font-size: 1.4rem;
  white-space: nowrap;
`;
