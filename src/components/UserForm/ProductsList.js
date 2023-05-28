import { useContext } from "react";
import { ContextCard } from "../../lib/selectedCard";
import { ContextTotal } from "../../lib/totalCount";
import { shops } from "../mock-data";

export const ProductsList = () => {
  const [selectedCard] = useContext(ContextCard);
  const [, setTotalCount] = useContext(ContextTotal);

  const handleClick = (e) => {
    e.preventDefault();
    const priceProduct = Array.from(
      document.querySelectorAll("div.card > input")
    ).map((el) => el.value);
    const total = priceProduct.reduce((a, b) => +a + +b);
    setTotalCount(total);
  };

  const selectedCardJSX = selectedCard.map((id) => {
    for (let i = 0; i < shops.length; i++) {
      const shop = shops[i];
      for (let j = 0; j < shop.products.length; j++) {
        const product = shop.products[j];
        if (id === product.name) {
          return (
            <div className="card" key={product.name}>
              <img src="#" alt={product.img} />
              <p>{product.name}</p>
              <input
                className="total"
                type="number"
                min="0"
                defaultValue="0"
                onClick={handleClick}
              />
            </div>
          );
        }
      }
    }
    return null;
  });

  return <div className="shop_cards_list">{selectedCardJSX}</div>;
};
