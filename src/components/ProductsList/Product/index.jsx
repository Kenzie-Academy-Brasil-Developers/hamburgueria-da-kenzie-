import { ThemeButton } from "../../../styles/buttons";
import { ProductCards } from "./styled";

export const Product = ({ item, addCart }) => {
  const { id, img, name, category, price } = item;
  return (
    <ProductCards key={id}>
      <div className="img-product">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{category}</p>
        <p>{price}</p>
        <ThemeButton
          id={id}
          type="button"
          buttonStyled="green"
          onClick={() => addCart(item)}
        >
          Adicionar
        </ThemeButton>
      </div>
    </ProductCards>
  );
};
