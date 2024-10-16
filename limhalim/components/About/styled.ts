import { fade, fadeIn } from "@/styles/animation";
import styled from "styled-components";

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    align-items: start;
  }
`;

export const Job = styled.div`
  font-size: 4.8rem;
  font-weight: 900;
  white-space: nowrap;

  color: #eee;
  opacity: 0.4;

  span {
    opacity: 0;
    margin-right: 0.2rem;

    @media (max-width: 1024px) {
      font-size: 3.2rem;
    }

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }

  :nth-child(1) {
    animation: ${fade} 4s forwards;
  }
  :nth-child(2) {
    animation: ${fade} 4.4s forwards;
  }
  :nth-child(3) {
    animation: ${fade} 4.8s forwards;
  }
  :nth-child(4) {
    animation: ${fade} 5.2s forwards;
  }
  :nth-child(5) {
    animation: ${fade} 5.6s forwards;
  }
  :nth-child(6) {
    animation: ${fade} 6s forwards;
  }
  :nth-child(7) {
    animation: ${fade} 6.4s forwards;
  }
  :nth-child(8) {
    animation: ${fade} 6.8s forwards;
  }
  :nth-child(9) {
    animation: ${fade} 7.2s forwards;
  }
  :nth-child(10) {
    animation: ${fade} 7.6s forwards;
  }
  :nth-child(11) {
    animation: ${fade} 8s forwards;
  }
  :nth-child(12) {
    animation: ${fade} 8.4s forwards;
  }
  :nth-child(13) {
    animation: ${fade} 9s forwards;
  }
  :nth-child(14) {
    animation: ${fade} 9.4s forwards;
  }
  :nth-child(15) {
    animation: ${fade} 9.8s forwards;
  }
  :nth-child(16) {
    animation: ${fade} 10.2s forwards;
  }
  :nth-child(17) {
    animation: ${fade} 10.6s forwards;
  }
  :nth-child(18) {
    animation: ${fade} 11s forwards;
  }
  :nth-child(19) {
    animation: ${fade} 11.4s forwards;
  }
  :nth-child(20) {
    animation: ${fade} 12s forwards;
  }
  :nth-child(21) {
    animation: ${fade} 12.4s forwards;
  }
  :nth-child(22) {
    animation: ${fade} 12.8s forwards;
  }
  :nth-child(23) {
    animation: ${fade} 13.2s forwards;
  }
  :nth-child(24) {
    animation: ${fade} 13.6s forwards;
  }
  :nth-child(25) {
    animation: ${fade} 14s forwards;
  }
  :nth-child(26) {
    animation: ${fade} 14.4s forwards;
  }
`;

export const ProfileImageWrapper = styled.div`
  animation: ${fadeIn} 6s forwards;
`;

export const Birth = styled.p`
  color: #eeeeee95;
  opacity: 0;
  font-size: 4rem;
  font-weight: 900;

  animation: ${fade} 14s forwards;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Bar = styled.div`
  border: 1.6px solid #eeeeee53;
  border-radius: 0.5rem;
  opacity: 0;

  width: 24rem;
  height: 0.5rem;
  animation: ${fade} 12s forwards;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ActivitiesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 1024px) {
    gap: 0.4rem;
  }

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

export const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const Date = styled.div`
  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.3rem;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;

  border-radius: 2.4rem;
  padding: 0.8rem 1.8rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.5rem;

  display: flex;
  gap: 0.4rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
