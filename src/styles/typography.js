import styled, { css } from "styled-components";
import { BaseTitle } from "./components/BaseTitle";

export const ThemeTitle = styled(BaseTitle)`
  font-family: "Inter", sans-serif;
  font-size: 28px;
  line-height: 1.3;

  ${(props) => {
    switch (props.titleSize) {
      case "title1":
        return css`
          font-size: 26px;
          @media (mix-width: 1024px) {
            font-size: 42px;
          }
        `;

      case "title2":
        return css`
          font-size: 22px;
          @media (mix-width: 1024px) {
            font-size: 28px;
          }
        `;

      case "title3":
        return css`
          font-size: 18px;
        `;

      case "title4":
        return css`
          font-size: 14px;
        `;

      default:
        return false;
    }
  }}
`;

export const ThemeParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: var (${(props) => props.color});
  opacity: ${(props) => props.opacity};
`;
