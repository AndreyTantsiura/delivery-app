//Core
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

//Instruments
import { ProductsList } from "./ProductsList";
import { ContextTotal } from "../../lib/totalCount";
import { Context } from "../../lib/selectedShop";
import { ContextCard } from "../../lib/selectedCard";
import { schema } from "./config";

export const UserForm = () => {
  const navigate = useNavigate();
  const [, setSelectedShopId] = useContext(Context);
  const [, setSelectedCardId] = useContext(ContextCard);
  const [totalCount, setTotalCount] = useContext(ContextTotal);
  const form = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = form.handleSubmit((data) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("total", totalCount);
    setTotalCount(0);
    setSelectedShopId("");
    setSelectedCardId([]);
    form.reset();
    navigate("/shop");
  });

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="name">
          Name
          <input type="text" id="name" {...form.register("name")} />
          {form.formState.errors.name && (
            <span style={{ color: "red" }}>
              {form.formState.errors.name.message}
            </span>
          )}
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <span style={{ color: "red" }}>
              {form.formState.errors.email.message}
            </span>
          )}
        </label>
        <label htmlFor="phone">
          Phone
          <input type="text" id="phone" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <span style={{ color: "red" }}>
              {form.formState.errors.phone.message}
            </span>
          )}
        </label>
        <label htmlFor="address">
          Address
          <input type="text" id="address" {...form.register("address")} />
          {form.formState.errors.address && (
            <span style={{ color: "red" }}>
              {form.formState.errors.address.message}
            </span>
          )}
        </label>
      </fieldset>
      <ProductsList />
      <footer>
        <p>Total price: {totalCount} </p>
        <button className="submit" type="submit">
          Submit
        </button>
      </footer>
    </form>
  );
};
