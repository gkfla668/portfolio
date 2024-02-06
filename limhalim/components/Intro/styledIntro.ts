import styled from "styled-components";
import { flash, neonFlash, fadeIn } from "@/styles/animation";

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
`;

export const Text = styled.h1`
  font-family: "NanumSquareExtraBold";
  font-weight: 800;
  opacity: 0.1;
  color: #42d17e;
  font-size: 1.2rem;
  letter-spacing: 0.4rem;
  white-space: nowrap;

  animation: ${flash} 6s infinite;

  text-shadow: 0 0 2px #eee;
`;

export const Button = styled.div`
  cursor: pointer;

  display: flex;
  gap: 1rem;

  span {
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 4px solid #42d17d;
    border-bottom: 4px solid #42d17d;
    border-radius: 0.4rem;
    transform: rotate(45deg);
    animation: ${flash} 6s infinite;
    box-sizing: border-box;
  }
`;
