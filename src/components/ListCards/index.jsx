import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import { Cards } from "./style";

export const ListCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <Cards>
            <div>
              <img src={product.img} alt="" />
            </div>
            <div>
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p>{product.price}</p>
            </div>
          </Cards>
        );
      })}
    </>
  );
};
