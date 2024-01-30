import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;

  width: 100%;
  padding: 3.2rem;

  background-color: #42d17ee8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.2rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: white;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #ffffffb7;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        본 페이지는 상업적 목적이 아닌, 개인 포트폴리오용으로 제작되었습니다.
      </Title>
      <Text>© 2024 Lim, Ha-Lim. All rights Reserved.</Text>
    </Wrapper>
  );
};

export default Footer;
