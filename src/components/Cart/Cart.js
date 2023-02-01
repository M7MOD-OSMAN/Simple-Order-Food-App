import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ showModal, hideModal, isModalShown }) => {
  const cartCtxt = useContext(CartContext);
  const hasItems = cartCtxt.items.length > 0;
  const totalAmount = `$${cartCtxt.totalAmount.toFixed(2)}`;

  const addItem = (item) => {
    cartCtxt.addItem({ ...item, amount: 1 });
  };
  const removeItem = (id) => {
    cartCtxt.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          addItem={addItem.bind(null, item)}
          removeItem={removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    showModal && (
      <Modal hideModal={hideModal}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={hideModal}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    )
  );
};

export default Cart;
