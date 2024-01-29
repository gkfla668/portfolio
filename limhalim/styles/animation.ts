import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fade = keyframes`
  to {
    opacity: 1;
  }
`;

export const wave = keyframes`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const bubble = keyframes`
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
`;

export const flash = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

export const drift = keyframes`
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  `;

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
