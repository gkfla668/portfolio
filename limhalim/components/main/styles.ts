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
  animation: ${fadeIn} 4s;
`;

export const PageContainerStyle = styled.div`
  padding: 4.4rem 20rem;

  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2.4rem 4rem;
  }
`;
