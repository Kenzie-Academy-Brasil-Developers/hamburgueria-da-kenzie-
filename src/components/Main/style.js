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

    section{
      width: 95%;
      margin: 10px auto;
    }
  }
`;

