import { useContext } from "react";
import { Context } from "../../lib/selectedShop";
import { shops } from "../mock-data";

export const ShopsList = () => {
  const [, setSelectedShopId] = useContext(Context);

  const shopJSX = shops.map(({ id, name }) => {
    const handleClick = () => {
      setSelectedShopId(id);
    };
    return (
      <div className="shop" id={id} key={id} onClick={handleClick}>
        {name}
      </div>
    );
  });

  return (
    <div className="shops_list">
      <p>Shops:</p>
      {shopJSX}
    </div>
  );
};
