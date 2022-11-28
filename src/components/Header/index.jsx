import React, { useState } from "react";
import { StyledHeader } from "./style";
import { ThemeButton } from "../../styles/buttons";
import logo from "../../assets/logo.svg";

export const Header = ({functionFilterCards}) => {
  const [inputValue, setInputValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    functionFilterCards(inputValue);
    setInputValue("")
  };

  return (
    <StyledHeader>
      <section>
        <img src={logo} alt="Logo" />
        <form onSubmit={submit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) =>
              setInputValue(event.target.value.toLowerCase())
            }
            placeholder="Digitar Pesquisa"
          ></input>
          <ThemeButton type="submit" buttonStyled="green">
            Pesquisar
          </ThemeButton>
        </form>
      </section>
    </StyledHeader>
  );
};
