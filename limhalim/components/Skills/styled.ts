import {
  CircleRotate,
  Rotate,
  RotateReverse,
  fadeIn,
} from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */

  height: 100%;
`;

export const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StackCircle = styled.div`
  position: relative;

  width: 480px;
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 6s forwards;

  @media (max-width: 768px) {
    width: 340px;
    height: 340px;
  }
`;

export const OutCircle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 3px solid #42d17d;
  box-shadow: 0 0 4px #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${Rotate} 32s linear infinite;

  :nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  :nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  :nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

export const Item = styled.div`
  cursor: pointer;

  width: 72px;
  height: 72px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #42d17d 0%, #47c07a 100%);
  box-shadow: 0 0 4px #eee;

  img {
    margin: 0px auto;
    width: 84%;
    animation: ${RotateReverse} 32s linear infinite;
  }

  &:hover {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

export const InCircle = styled.div`
  animation: ${CircleRotate} 32s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 68%;
  height: 68%;
  border: 3px solid #42d17d;
  box-shadow: 0 0 4px #eee;
  border-radius: 50%;

  :nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  :nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  :nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.6rem;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;
  border-radius: 2.4rem;
  padding: 1rem 2.8rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.7rem;
    border-radius: 1.8rem;
  }
`;
