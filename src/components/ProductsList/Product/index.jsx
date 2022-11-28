import { ThemeButton } from "../../../styles/buttons";
import { ProductCards } from "./styled";

export const Product = ({ item, addCart }) => {
  const { id, img, name, category, price } = item;
  return (
    <ProductCards>
      <div className="img-product">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{category}</p>
        <p>{price}</p>
        <ThemeButton
          id={id}
          type="submit"
          buttonStyled="green"
          onClick={(e) => {
            e.preventDefault();
            addCart(item);
          }}
        >
          Adicionar
        </ThemeButton>
      </div>
    </ProductCards>
  );
};
