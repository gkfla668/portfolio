import styled from "styled-components";
import { fadeIn, wave } from "@/styles/animation";

const Box = styled.div`
  font-family: "Climate Crisis", sans-serif;
  color: white;
  font-size: 4rem;

  padding: 1rem 6rem;

  animation: ${fadeIn} 6s;

  &:hover {
    width: 80%;
    cursor: pointer;
    color: #272727;
    display: flex;
    justify-content: end;

    /** animation */
    transition: all 0.4s ease-in-out;

    :nth-child(1) {
      animation-delay: 0.1s;
    }
    :nth-child(2) {
      animation-delay: 0.13s;
    }
    :nth-child(3) {
      animation-delay: 0.16s;
    }
    :nth-child(4) {
      animation-delay: 0.19s;
    }
    :nth-child(5) {
      animation-delay: 0.22s;
    }
    :nth-child(6) {
      animation-delay: 0.25s;
    }
    :nth-child(7) {
      animation-delay: 0.28s;
    }
    :nth-child(8) {
      animation-delay: 0.31s;
    }

    span {
      animation: ${wave} 1.5s ease-in-out;
      animation-iteration-count: 1;
    }

    text-shadow: 0 0 6px #eee;
  }
`;

const Menu = ({ category }: { category: string }) => {
  return (
    <Box>
      {category.split("").map((ch, index) => (
        <span key={index}>{category.substring(index, index + 1)}</span>
      ))}
    </Box>
  );
};

export default Menu;
