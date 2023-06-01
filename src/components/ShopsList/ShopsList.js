//Core
import { useContext, useRef } from "react";

//Instruments
import { Context } from "../../lib/selectedShop";
import { shops } from "../../mock-data";

export const ShopsList = () => {
  const [, setSelectedShopId] = useContext(Context);
  const shopButtons = useRef([]);

  const handleClick = (index) => (e) => {
    e.preventDefault();
    shopButtons.current.forEach((elem, i) => {
      if (i !== index) {
        elem.setAttribute("disabled", "disabled");
      }
    });
    setSelectedShopId(shops[index].id);
    e.target.removeAttribute("disabled");
  };

  const shopJSX = shops.map(({ id, name }, index) => (
    <button
      ref={(button) => (shopButtons.current[index] = button)}
      className="shop"
      id={id}
      key={id}
      onClick={handleClick(index)}
    >
      {name}
    </button>
  ));

  return (
    <div className="shops_list">
      <p>Shops:</p>
      {shopJSX}
    </div>
  );
};
