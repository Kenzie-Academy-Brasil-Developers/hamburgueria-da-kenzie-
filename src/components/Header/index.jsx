import React from "react";
import { StyledHeader } from "./style";
import { ThemeButton } from "../../styles/buttons";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="Logo" />
        <form>
          <input type="text" placeholder="Digitar Pesquisa"></input>
          <ThemeButton type="submit" buttonStyled="green">
            Pesquisar
          </ThemeButton>
        </form>
      </section>
    </StyledHeader>
  );
};
