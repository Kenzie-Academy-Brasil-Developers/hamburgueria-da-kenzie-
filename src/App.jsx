import React from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "../src/styles/global";
import { useState } from "react";
import { StyledMain } from "./components/Main/style";
import { ThemeParagraph, ThemeTitle } from "./styles/typography";
import { ThemeButton } from "./styles/buttons";
import { useEffect } from "react";
import { api } from "./services/api";
import { ProductList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  const filterCards = (inputValue) => {
    if (inputValue !== "") {
      const includesItem = products.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
      );
      setFilteredProducts(includesItem);
    }
  };

  const addCart = (item) => {
    const newItem = {
      ...item
    };
    setCurrentSale([...currentSale, newItem])
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header functionFilterCards={filterCards} />
      <StyledMain>
        <section>
          <ProductList products={products} addCart={addCart} />
        </section>
        <aside>
          <section>
            <ThemeTitle titleSize="title4" tag="h4">
              Carrinho de compras
            </ThemeTitle>
          </section>
          <section>
            <div>
              <Cart currentSale={currentSale} />
            </div>
            <div>
              <ThemeParagraph fontSize="14" fontWeight="bold">
                Total <span>R$ 40,00</span>
              </ThemeParagraph>
              <ThemeButton buttonSize="lg" buttonStyled="grey">
                Remover todos
              </ThemeButton>
            </div>
          </section>
        </aside>
      </StyledMain>
    </div>
  );
};
