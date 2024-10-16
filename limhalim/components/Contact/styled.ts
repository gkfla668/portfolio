import styled from "styled-components";
import { fadeIn } from "@/styles/animation";

export const PostContainer = styled.div`
  width: 100%;
  animation: ${fadeIn} 4s forwards;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const PostItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  width: 100%;

  padding-bottom: 3.6rem;

  border-bottom: 0.05rem solid #828282;

  @media (max-width: 768px) {
    padding-bottom: 1.6rem;
  }
`;

export const PostLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const PostTitle = styled.div`
  color: #42d17d;
  font-weight: 900;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const PostContent = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ContactContainer = styled.div``;

export const MainText = styled.div`
  animation: ${fadeIn} 6s;

  margin: 2.2rem 0 0 2rem;
  font-family: NanumSquare;
  font-size: 2.1rem;
  color: white;
  opacity: 0.9;

  width: 68%;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 2rem 0 0 1rem;
    width: 90%;
  }
`;

export const Text = styled.div`
  animation: ${fadeIn} 6s;

  margin-top: 2.2rem;
  font-family: NanumSquare;
  font-size: 1.8rem;
  color: white;
  opacity: 0.8;

  width: 68%;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1rem;
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 1.4rem;

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

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

export const Info = styled.div`
  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.4rem;
  font-weight: 900;
  text-align: center;

  border-radius: 2.4rem;
  padding: 0.6rem 0;
  width: 10rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.2rem 0;
    width: 6rem;
  }
`;

export const Detail = styled.p`
  color: white;
  font-size: 1.4rem;

  display: flex;
  gap: 0.4rem;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LinkTitle = styled.div`
  color: #42d17d;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-align: center;
  white-space: nowrap;

  animation: ${fadeIn} 8s;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;

  opacity: 0.8;
  white-space: nowrap;

  &:hover {
    opacity: 1;
  }
`;
