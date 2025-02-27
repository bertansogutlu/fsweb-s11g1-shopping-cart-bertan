import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    !cart.some( e => e.id === item.id) && setCart([...cart, item])
  };

  const removeItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart(cart.filter( e => e.id !== item.id ))
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{cart, removeItem}}>
        <Navigation/>

        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products/>
          </Route>

          <Route path="/cart">
            <ShoppingCart/>
          </Route>
        </main>
      </CartContext.Provider>
      </ProductContext.Provider>
    </div >
  );
}

export default App;
