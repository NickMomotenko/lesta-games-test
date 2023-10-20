import styled, { css } from "styled-components";

export const ButtonWrapp = styled.button<{ view?: string }>`
  ${({ view }) => view === "ghost" && css`
        background: transparent;
        color: blue;
        border-color: blue;
  `}
`;
