export const Cart = ({ currentSale, deleteCart }) => {
  return (
    <>
      <ul>
        {currentSale.map((item) => {
          const { id, img, name, category, price } = item;

          return (
            <li key={item.id}>
              <div className="img-product">
                <img src={img} alt="" />
              </div>
              <div>
                <h4>{name}</h4>
                <p>{category}</p>
                <p>{price}</p>
                <button id={id} type="button" onClick={() => deleteCart(id)}>
                  Remover
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
