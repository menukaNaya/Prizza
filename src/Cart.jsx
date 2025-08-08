const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Cart({ cartItems, checkout }) {
  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].pizza.sizes[cartItems[i].size];
    }
  }

  function getCartItems() {
    return cartItems.map((item, index) => {
      return (
        <li key={index}>
          <span className="size">{item.size}</span> -
          <span className="type">{item.pizza.name}</span> -
          <span className="price">{item.price}</span>
        </li>
      );
    });
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>{getCartItems()}</ul>
      <p>Total: {intl.format(totalPrice)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
