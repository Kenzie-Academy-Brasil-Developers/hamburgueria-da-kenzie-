import styled from "styled-components";

export const StyledUl = styled.ul`
  max-height: 400px;
  overflow: auto;
  ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
`;

export const StyledLi = styled.li`
  min-width: 343px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  .div-cart {
    display: flex;
    gap: 20px;
  }

  img {
    width: 75px;
    height: 75px;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    background-color: var(--color-grey-10);
    margin: 0 auto;
    object-fit: cover;
  }
`;
