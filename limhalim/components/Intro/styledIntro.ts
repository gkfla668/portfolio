import styled from "styled-components";
import { neonFlash, fadeIn, flashAndSlide } from "@/styles/animation";

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
