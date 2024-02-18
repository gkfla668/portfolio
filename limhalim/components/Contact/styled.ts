import styled from "styled-components";
import { fadeIn } from "@/styles/animation";

export const Text = styled.div`
  animation: ${fadeIn} 6s;

  margin: 3.6rem 0 0 2rem;
  font-family: NanumSquare;
  font-size: 2.8rem;
  color: #ffffff60;

  width: 64%;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 2rem 0 0 1rem;
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 2rem;

  :nth-child(1) {
    animation: ${fadeIn} 4s forwards;
  }
  :nth-child(2) {
    animation: ${fadeIn} 5s forwards;
  }
  :nth-child(3) {
    animation: ${fadeIn} 6s forwards;
  }
  :nth-child(4) {
    animation: ${fadeIn} 7s forwards;
  }
  :nth-child(5) {
    animation: ${fadeIn} 8s forwards;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Info = styled.div`
  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;

  border-radius: 2.4rem;
  padding: 1rem 0;
  width: 14rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    width: 12rem;
  }
`;

export const Detail = styled.p`
  color: white;
  font-size: 1.8rem;

  display: flex;
  gap: 0.4rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const LinkTitle = styled.div`
  color: #42d17d;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.1rem;

  animation: ${fadeIn} 8s;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
