import { fade, fadeIn, RotateReverse } from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */

  width: 100%;
  height: 100%;
`;

export const ContentBox = styled.div`
  margin-top: 1.6rem;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.6rem;

  :nth-child(1) {
    animation: ${fadeIn} 2s forwards;
  }
  :nth-child(2) {
    animation: ${fadeIn} 2.2s forwards;
  }
  :nth-child(3) {
    animation: ${fadeIn} 2.4s forwards;
  }
  :nth-child(4) {
    animation: ${fadeIn} 2.6s forwards;
  }
  :nth-child(5) {
    animation: ${fadeIn} 2.8s forwards;
  }
  :nth-child(6) {
    animation: ${fadeIn} 3s forwards;
  }
  :nth-child(7) {
    animation: ${fadeIn} 3.2s forwards;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
  white-space: nowrap;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.7rem;
    border-radius: 1.8rem;
  }
`;
