import { fadeIn, RotateReverse } from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */

  width: 100%;
  height: 100%;
`;

export const ContentBox = styled.div`
  margin-left: 2.4rem;
  margin-top: 1.6rem;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.6rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin: 0;
  }

  :nth-child(1) {
    animation: ${fadeIn} 1s forwards;
  }
  :nth-child(2) {
    animation: ${fadeIn} 1.4s forwards;
  }
  :nth-child(3) {
    animation: ${fadeIn} 1.8s forwards;
  }
  :nth-child(4) {
    animation: ${fadeIn} 2.2s forwards;
  }
  :nth-child(5) {
    animation: ${fadeIn} 2.6s forwards;
  }
  :nth-child(6) {
    animation: ${fadeIn} 3s forwards;
  }
  :nth-child(7) {
    animation: ${fadeIn} 3.4s forwards;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Stack = styled.div`
  cursor: pointer;

  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 1px solid #42d17e29;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #42d17e29 0%, #42d17e29 100%);
  box-shadow: 0 0 4px #eee;

  box-shadow: 0 0 4px #42d17e29;

  img {
    margin: 0px auto;
    width: 84%;
    animation: ${RotateReverse} 32s linear infinite;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  &:hover {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Box = styled.span`
  color: #42d17d;
  font-size: 1.6rem;
  font-weight: 600;

  width: 100%;
  white-space: wrap;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
