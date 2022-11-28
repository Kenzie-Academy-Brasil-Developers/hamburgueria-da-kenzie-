import styled from "styled-components";

export const ProductCards = styled.li`
  min-width: 300px;
  height: 361px;
  border: 3px solid var(--color-grey-20);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .img-product {
    width: 100%;
    height: 150px;
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    background-color: var(--color-grey-10);
  }

  img {
    width: 60%;
    height: 70%;
    margin: 0 auto;
    object-fit: cover;
  }
`;
