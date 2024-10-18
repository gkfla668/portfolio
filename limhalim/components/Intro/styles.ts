import styled from "styled-components";
import { drift, fadeIn, flashAndSlide, scrollFlash } from "@/styles/animation";

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

  @media (max-width: 768px) {
    div {
      opacity: 0.2;
      position: absolute;
      top: 5%;
      left: 80%;

      background: #42d17e53;
      width: 300px;
      height: 300px;

      margin-left: -250px;
      margin-top: -250px;
      transform-origin: 50% 50%;
      border-radius: 40%;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 800;
  color: #42d17d;
  font-size: 6.4rem;
  letter-spacing: 0.4rem;
  white-space: nowrap;

  text-shadow:
    0 0 2px #eee,
    0 0 3px #42d17d,
    0 0 4px #42d17d;

  @media (max-width: 768px) {
    font-size: 4.8rem;
  }

  @media (max-width: 576px) {
    font-size: 2.4rem;
  }
`;

export const Text = styled.h1`
  font-weight: 900;
  opacity: 0.1;
  color: #42d17e;
  font-size: 1.2rem;
  letter-spacing: 0.4rem;
  white-space: nowrap;

  animation: ${fadeIn} 6s forwards;

  text-shadow: 0 0 2px #eee;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.3rem;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  animation: ${flashAndSlide} 6s infinite;
`;

export const MouseBox = styled.div`
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
  opacity: 0.5;
  box-sizing: content-box;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 20px;
    height: 18px;
  }
`;

export const Scroller = styled.div`
  width: 5px;
  height: 8px;
  border-radius: 40%;
  background-color: #fff;
  animation: ${scrollFlash} 2s infinite;

  @media (max-width: 768px) {
    width: 4px;
    height: 7px;
  }
`;

export const H1 = styled.h1`
  font-family: "Kanit", sans-serif;
  color: white;

  font-size: 1.4rem;
  white-space: nowrap;

  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
