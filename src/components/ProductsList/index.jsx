import { StyledList } from "./styled";
import { Product } from "./Product/index";

export const ProductList = ({ products }) => {
  return (
    <StyledList>
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </StyledList>
  );
};
