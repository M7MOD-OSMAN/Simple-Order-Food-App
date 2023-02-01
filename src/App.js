import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => setIsModalShown(true);
  const hideModal = () => setIsModalShown(false);
  return (
    <CartProvider>
      {isModalShown && (
        <Cart
          showModal={showModal}
          hideModal={hideModal}
          isModalShown={isModalShown}
        />
      )}
      <Header
        showModal={showModal}
        hideModal={hideModal}
        isModalShown={isModalShown}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
