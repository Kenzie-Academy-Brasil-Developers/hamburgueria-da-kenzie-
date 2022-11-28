import { StyledUl, StyledLi } from "./styled";

export const Cart = ({ currentSale, deleteCart }) => {
  return (
    <>
      <StyledUl>
        {currentSale.map((item) => {
          const { id, img, name, category, price } = item;

          return (
            <StyledLi key={item.id}>
              <div className="div-cart">
                  <img src={img} alt="" />
                <div>
                  <h4>{name}</h4>
                  <p>{category}</p>
                  <p>{price}</p>
                </div>
              </div>
              <button id={id} type="button" onClick={() => deleteCart(id)}>
                Remover
              </button>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
