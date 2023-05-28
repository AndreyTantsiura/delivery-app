import { useContext } from "react";
import { Context } from "../../lib/selectedShop";
import { ContextCard } from "../../lib/selectedCard";
import { shops } from "../mock-data";

export const ShopCardsList = () => {
  const [selectedShopId] = useContext(Context);
  const [selectedCardId, setSelectedCardId] = useContext(ContextCard);

  const shopCardJSX = shops.map((shop) => {
    if (selectedShopId === shop.id) {
      const product = shop.products.map(({ name, img }) => {
        const handleClick = () => {
          setSelectedCardId([...selectedCardId, name]);
        };
        return (
          <div className="card" key={name}>
            <img src="#" alt={img} />
            <p>{name}</p>
            <button onClick={handleClick}>add to Cart</button>
          </div>
        );
      });
      return product;
    }
    return null;
  });

  return (
    <div className="shop_cards_list">
      {selectedShopId ? shopCardJSX : <p>Select a store</p>}
    </div>
  );
};
