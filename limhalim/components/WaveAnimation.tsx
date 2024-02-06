import { drift } from "@/styles/animation";
import styled from "styled-components";

export const WaveContainer = styled.div`
  div {
    opacity: 0.2;
    position: absolute;

    left: 50%;

    background: #99e0b652;
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

const WaveAnimation = () => {
  return (
    <WaveContainer>
      <div></div>
      <div></div>
      <div></div>
    </WaveContainer>
  );
};

export default WaveAnimation;
