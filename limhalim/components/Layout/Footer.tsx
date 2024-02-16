import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 3.2rem;

  background-color: #42d17ee6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`;

const Title = styled.h1`
  font-family: NanumSquareBold;
  font-size: 1.4rem;
  color: white;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-weight: 900;
  font-size: 1rem;
  color: #ffffffd7;
`;

const Footer = () => {
  return (
    <Container>
      <Title>
        본 페이지는 상업적 목적이 아닌, 개인 포트폴리오용으로 제작되었습니다.
      </Title>
      <Text>© 2024 Lim, Ha-Lim. All rights Reserved.</Text>
    </Container>
  );
};

export default Footer;
