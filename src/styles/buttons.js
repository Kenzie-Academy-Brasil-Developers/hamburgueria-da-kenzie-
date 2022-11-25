import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;

  ${(props) => {
    switch (props.buttonSize) {
      case "lg":
        return css`
          width: 100%;
          height: 60px;
        `;

      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.buttonStyled) {
      case "green":
        return css`
          color: var(--color-grey-0);
          background-color: var(--color-primary);
          &:hover {
            background-color: var(--color-primary-50);
          }
        `;
      case "grey":
        return css`
          color: var(--color-grey-50);
          background-color: var(--color-grey-20);
          &:hover {
            color: var(--color-grey-0);
            background-color: var(--color-grey-50);
          }
        `;

      case "transparent":
        return css`
          background-color: transparent;
        `;

      default:
        return false;
    }
  }}
`;
