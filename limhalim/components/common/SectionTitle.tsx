import { fadeIn, wave } from "@/styles/animation";
import { styled } from "styled-components";

const Box = styled.div`
  font-family: "Climate Crisis", sans-serif;
  color: white;
  font-size: 4rem;
  letter-spacing: 0.2rem;

  animation: ${fadeIn} 3s;

  display: flex;
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
    animation: ${wave} 2s ease-in-out infinite;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Box>
      {title.split("").map((ch, index) => (
        <span key={index}>{title.substring(index, index + 1)}</span>
      ))}
    </Box>
  );
};

export default SectionTitle;
