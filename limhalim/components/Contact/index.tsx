import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import velogPNG from "/public/images/velog.png";
import githubPNG from "/public/images/github.png";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";
import { fadeIn } from "@/styles/animation";

const H1 = styled.div`
  color: #42d17d;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.1rem;

  animation: ${fadeIn} 8s;
`;

const Button = styled.a`
  display: flex;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Contact = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const threshold = 2600;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, []);

  return (
    <div id="Contact" className="relative min-h-screen w-full px-32 py-20">
      {scroll && (
        <>
          <Title title="Contact" />
          <div className="absolute right-[4%] top-[60%] flex flex-col items-center justify-center p-4">
            <Wrapper>
              <Container>
                <Date>Phone</Date>
                <Text>010-6384-9653</Text>
              </Container>
              <Container>
                <Date>Email</Date>
                <Text>harim668@gmail.com</Text>
              </Container>
            </Wrapper>

            <div className="flex gap-20">
              <Button href="https://github.com/gkfla668">
                <Image src={githubPNG} alt="github" width={40} height={40} />{" "}
                <H1>Github</H1>
              </Button>

              <Button href="https://velog.io/@gkfla668">
                <Image src={velogPNG} alt="velog" width={36} height={36} />
                <H1>Blog</H1>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Wrapper = styled.div`
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

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Date = styled.div`
  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;

  border-radius: 2.4rem;
  padding: 1rem 0;
  width: 14rem;
`;

const Text = styled.p`
  color: white;
  font-size: 1.8rem;

  display: flex;
  gap: 0.4rem;
`;

export default Contact;
