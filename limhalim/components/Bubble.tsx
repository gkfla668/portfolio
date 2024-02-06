import styled from "styled-components";
import { bubble } from "@/styles/animation";

const Bubble = () => {
  return (
    <Wrapper>
      {Array.from({ length: 20 }, (_, index) => (
        <div key={index}></div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ::after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  background: #272727;
  background-blend-mode: soft-light;

  z-index: -1;
  height: 100%;
  width: 100%;

  position: absolute;

  div {
    height: 40px;
    width: 40px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    box-shadow: 0px 0px 2px #eeeeee;
    position: absolute;
    animation: ${bubble} 10s linear infinite;
  }

  :nth-child(1) {
    top: 20%;
    left: 20%;
    animation-duration: 8s;
  }
  :nth-child(2) {
    top: 60%;
    left: 80%;
    animation-duration: 10s;
  }
  :nth-child(3) {
    top: 40%;
    left: 40%;
    animation-duration: 3s;
  }
  :nth-child(4) {
    top: 66%;
    left: 30%;
    animation-duration: 7s;
  }
  :nth-child(5) {
    top: 90%;
    left: 10%;
    animation-duration: 9s;
  }
  :nth-child(6) {
    top: 30%;
    left: 60%;
    animation-duration: 5s;
  }
  :nth-child(7) {
    top: 70%;
    left: 20%;
    animation-duration: 8s;
  }
  :nth-child(8) {
    top: 75%;
    left: 60%;
    animation-duration: 10s;
  }
  :nth-child(9) {
    top: 50%;
    left: 50%;
    animation-duration: 6s;
  }
  :nth-child(10) {
    top: 45%;
    left: 20%;
    animation-duration: 10s;
  }
  :nth-child(11) {
    top: 10%;
    left: 90%;
    animation-duration: 9s;
  }
  :nth-child(12) {
    top: 20%;
    left: 70%;
    animation-duration: 7s;
  }
  :nth-child(13) {
    top: 20%;
    left: 20%;
    animation-duration: 8s;
  }
  :nth-child(14) {
    top: 60%;
    left: 5%;
    animation-duration: 6s;
  }
  :nth-child(15) {
    top: 90%;
    left: 80%;
    animation-duration: 9s;
  }
`;

export default Bubble;
