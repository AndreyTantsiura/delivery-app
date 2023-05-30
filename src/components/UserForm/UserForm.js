import { ProductsList } from "./ProductsList";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContextTotal } from "../../lib/totalCount";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useContext(ContextTotal);
  const form = useForm({
    mode: "onTouched",
  });
  const onSubmit = form.handleSubmit((data) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("total", totalCount);
    setTotalCount(0);
    form.reset();
    navigate("/shop");
  });

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="name">
          Name
          <input type="text" id="name" {...form.register("name")} />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" {...form.register("email")} />
        </label>
        <label htmlFor="phone">
          Phone
          <input type="text" id="phone" {...form.register("phone")} />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" id="address" {...form.register("address")} />
        </label>
      </fieldset>
      <ProductsList />
      <footer>
        <p>Total price: {totalCount} </p>
        <button type="submit">Submit</button>
      </footer>
    </form>
  );
};
