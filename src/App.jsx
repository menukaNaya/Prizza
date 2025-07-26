import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Prizza - Especially for Programmers</h1>
      <Pizza
        name="Pizza 1"
        description="Decs 1"
        imgUrl="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Pizza 2"
        description="Decs 2"
        imgUrl="/public/pizzas/big_meat.webp"
      />
      <Pizza
        name="Pizza 3"
        description="Decs 3"
        imgUrl="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Pizza 4"
        description="Decs 4"
        imgUrl="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Pizza 5"
        description="Decs 5"
        imgUrl="/public/pizzas/pepperoni.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
