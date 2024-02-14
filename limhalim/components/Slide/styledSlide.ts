import { fadeIn } from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  padding: 8.6rem 7.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 6s forwards;
`;

export const Content = styled.div`
  width: 100%;
  height: 28rem;

  display: flex;
  align-items: start;

  gap: 5.2rem;
`;

export const Title = styled.h1`
  color: white;
  font-family: NanumSquareExtrabold;
  font-size: 2.8rem;

  text-align: start;
  line-height: 3.6rem;
`;

export const SubTitle = styled.h2`
  opacity: 0.4;
  color: white;
  font-weight: 900;
  font-size: 1.6rem;

  text-align: start;
  letter-spacing: 0rem;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  margin-top: 1.6rem;
`;

export const TagItem = styled.li`
  border-radius: 2rem;
  border: 1px solid #42d17d;

  padding: 0.6rem 1.6rem;

  color: #42d17d;
  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 0.1rem;

  white-space: nowrap;
`;

export const DetailButton = styled.button`
  font-weight: 900;
  border-radius: 2.4rem;

  padding: 1rem 0;

  width: 14rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.6rem;

  &:hover {
    color: #272727;
    background-color: #42d17d;
    font-weight: 900;
  }
`;
