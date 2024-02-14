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

export const neonFlash = keyframes`
    0% {
      text-shadow:
        0 0 2px #eee,
        0 0 4px #42d17d,
        0 0 8px #42d17d;
    }
    50% {
      text-shadow: 0 0 4px #eee;
    }
    100% {
      text-shadow:
        0 0 2px #eee,
        0 0 4px #42d17d,
        0 0 8px #42d17d;
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

export const flashAndSlide = keyframes`  
from {
    transform: translateX(80%);
       opacity: 0;
  }
  to {
    transform: translateX(-20%);
       opacity: 1;
  }
`;

export const scrollFlash = keyframes`
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(8px);
      opacity: 0;
    }
`;

export const Rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const RotateReverse = keyframes`
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  `;

export const CircleRotate = keyframes`
    from {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(405deg);
    }
  `;
