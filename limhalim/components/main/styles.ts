import styled from "styled-components";
import { fadeIn, drift } from "@/styles/animation";

export const WaveCircle = styled.span`
  div {
    opacity: 0.2;
    position: absolute;
    top: 4%;
    left: 50%;

    background: #42d17e53;
    width: 500px;
    height: 500px;

    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 50%;
    border-radius: 40%;
  }

  :nth-child(1) {
    animation: ${drift} 12s infinite linear;
  }
  :nth-child(2) {
    animation: ${drift} 14s infinite linear;
  }
  :nth-child(3) {
    animation: ${drift} 16s infinite linear;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #272727;

  animation: ${fadeIn} 4s;
`;

export const Box = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionContainer = styled.div`
  padding: 6rem 18rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2.8rem 3.2rem;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
