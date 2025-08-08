import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Order() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaType, setPizzatype] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzas.find((pizza) => pizza.id === pizzaType);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  function fetchPizzaTypes() {
    fetch("/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      });
  }

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    //In here cart is same as cart:cart
    setCart([]);
    setLoading(false);
  }

  function getOptionList() {
    return pizzas.map((pizza) => (
      <option key={pizza.id} value={pizza.id}>
        {pizza.name}
      </option>
    ));
  }

  function setCartItem(e) {
    e.preventDefault();
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  }

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form onSubmit={(e) => setCartItem(e)}>
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                name="pizza-type"
                value={pizzaType}
                onChange={(e) => setPizzatype(e.target.value)}
              >
                {getOptionList()}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                    onChange={(e) => setPizzaSize("L")}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          <div className="order-pizza">
            {selectedPizza && (
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                imgUrl={selectedPizza.image}
              />
            )}
            <p>{price}</p>
          </div>
        </form>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Cart checkout={checkout} cartItems={cart} />
      )}
    </div>
  );
}
