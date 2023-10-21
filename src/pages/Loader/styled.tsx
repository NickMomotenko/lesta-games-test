import styled, { css } from "styled-components";

export const LoaderWrapp = styled.div<{ active?: boolean }>`
  position: fixed;
  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({active}) => !active && css`
    pointer-events: none;
  `}

  &::before,
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 50%;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    background: rgb(249 249 249 / 100%);

    transition: 0.7s;
  }

  &::after {
    right: 0;
    left: auto;

    ${({ active }) =>
      !active &&
      css`
        right: -50%;
      `}
  }

  &::before {
    ${({ active }) =>
      !active &&
      css`
        left: -50%;
      `}
  }
`;
