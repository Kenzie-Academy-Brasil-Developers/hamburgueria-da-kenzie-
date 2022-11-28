import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  overflow: auto;
  scrollbar-width: initial;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 5px;

  @media (min-width: 700px) {
    max-width: 940px;
    max-height: 735px;
    flex-wrap: wrap;
  }

  @media (min-width: 700px) {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }
`;
