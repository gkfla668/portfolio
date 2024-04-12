import styled from "styled-components";
import {
  neonFlash,
  fadeIn,
  flashAndSlide,
  scrollFlash,
  drift,
} from "@/styles/animation";

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

export const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 800;
  color: #42d17d;
  font-size: 6.4rem;
  letter-spacing: 0.4rem;
  white-space: nowrap;

  animation: ${neonFlash} 8s infinite;

  @media (max-width: 768px) {
    font-size: 2.6rem;
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

export const H1 = styled.h1`
  font-family: "Kanit", sans-serif;
  color: white;

  font-size: 1.4rem;
  white-space: nowrap;
`;
