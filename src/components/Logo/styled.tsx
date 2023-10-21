import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`;

export const LogoWrapp = styled.div<{ animation?: boolean }>`
  height: 250px;
  width: 250px;
  position: relative;
  z-index:1;

  animation: ${pulse} 1.5s linear infinite;

  animation-play-state: ${({ animation }) => (animation ? "play" : "pause")};
`;

export const LogoIcon = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
