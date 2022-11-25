import React from "react";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { StyledMain } from "./style";
import { ThemeButton } from "../../styles/buttons";

export const Main = () => {
  return (
    <StyledMain>
      {/* <List/> */}
      <aside>
        <section>
          <ThemeTitle titleSize="title4" tag="h4">
            Carrinho de compras
          </ThemeTitle>
        </section>
        <section>
          <div>{/* <List/> */}</div>
          <div>
            <ThemeParagraph fontSize="14"  fontWeight="bold">
              Total <span>R$ 40,00</span>
            </ThemeParagraph>
            <ThemeButton buttonSize="lg" buttonStyled="grey">
              Remover todos
            </ThemeButton>
          </div>
        </section>
      </aside>
    </StyledMain>
  );
};
