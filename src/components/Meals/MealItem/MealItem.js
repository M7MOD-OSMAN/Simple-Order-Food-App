import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const cartCtxt = useContext(CartContext);
  const priceUpdated = `$${price.toFixed(2)}`;

  const onAddToCart = (amount) => {
    cartCtxt.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceUpdated}</div>
      </div>
      <MealItemForm onAddToCart={onAddToCart} id={id} />
    </li>
  );
};

export default MealItem;
