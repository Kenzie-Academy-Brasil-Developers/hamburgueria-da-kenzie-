import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 139px;
  display: flex;
  align-items: center;
  background-color: var(--color-grey-10);

  section {
    width: 95%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  @media (min-width: 700px) {
    height: 80px;
    
    section {
      flex-direction: row;
    }
  }

  @media (min-width: 1250px) {
    section {
      width: 90%;
    }
  }

  form {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: space-between;

    @media (min-width: 700px) {
      margin-top: 0;
      max-width: 365px;
    }
  }

  input {
    padding: 5px;
    border: none;
    outline: none;

    ::placeholder {
      color: var(--color-grey-20);
    }
  }

  /* button {
    color: var(--color-grey-0);
    padding: 10px 15px;
    border-radius: 8px;
    background-color: var(--color-primary);
  } */
`;
