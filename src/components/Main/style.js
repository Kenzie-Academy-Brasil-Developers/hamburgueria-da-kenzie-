import styled from "styled-components";

export const StyledMain = styled.main`
  width: 95%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 700px) {
    flex-direction: row;
    gap: 10px;

    section {
      width: 90%;
      max-width: 940px;
    }
  }

  @media (min-width: 1250px) {
    width: 92%;
  }

  aside {
    width: 100%;
    max-height: 535px;
    margin: 20px auto;
    border: 1px solid var(--color-grey-20);

    @media (min-width: 700px) {
      max-width: 382px;
      margin: 0;
    }
  }
`;

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
