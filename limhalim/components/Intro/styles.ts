import styled from "styled-components";
import {
  neonFlash,
  fadeIn,
  flashAndSlide,
  scrollFlash,
} from "@/styles/animation";

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

export const MouseBox = styled.div`
  margin-right: 4rem;

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
  opacity: 0.75;
  box-sizing: content-box;

  display: flex;
  justify-content: center;
`;

export const Scroller = styled.div`
  width: 5px;
  height: 8px;
  border-radius: 40%;
  background-color: #fff;
  animation: ${scrollFlash} 2s infinite;
`;

export const H1 = styled.h1`
  font-family: "Kanit", sans-serif;
  color: white;

  font-size: 1.4rem;
  white-space: nowrap;
`;
