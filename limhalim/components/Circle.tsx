import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CircleProps {
  left: number;
  top: number;
}

const CircleStyled = styled.div<CircleProps>`
  z-index: 999;

  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

const Circle = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ top: e.pageY, left: e.pageX });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <CircleStyled top={position.top} left={position.left} />;
};

export default Circle;
