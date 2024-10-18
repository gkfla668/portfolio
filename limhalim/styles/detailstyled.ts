import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  padding-bottom: 10rem;
  padding-top: 8rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  color: White;
  font-size: 3.6rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: 900;
  color: White;
  opacity: 0.6;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 1.7rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.4rem 1.3rem;
  }
`;

export const LinkStyled = styled.a`
  cursor: pointer;

  border-radius: 2.4rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.4rem;
  font-weight: 900;
  white-space: nowrap;

  &:hover {
    color: #363636;
    background-color: #42d17d;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const OverViewText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-left: 0.6rem;
  }
`;

export const SubText = styled.div`
  color: white;
  font-size: 2.6rem;
  font-weight: 900;

  padding: 1rem 0rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.6rem 0rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const InfoTitle = styled.div`
  border-radius: 2.4rem;
  width: 14rem;
  white-space: nowrap;
  padding: 0.8rem 0rem;

  color: #42d17d;
  font-weight: 900;
  background-color: #42d17e29;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 0rem;
  }
`;

export const InfoText = styled.div`
  color: white;
  font-size: 1.4rem;

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.4rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const MoreTitle = styled.div`
  color: #42d17d;
  font-weight: 900;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MoreText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CodeWrapper = styled.div`
  border-radius: 0.6rem;
  padding: 1.6rem 0;

  color: #42d17eeb;
  font-weight: 500;
  background-color: #8ea79829;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
