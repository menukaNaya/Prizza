const Pizza = ({ name, description }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("p", {}, description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Porzza"),
    React.createElement(Pizza, {
      name: "Check Pizza name 1",
      description: "Pizza Description1.",
    }),
    React.createElement(Pizza, {
      name: "Check Pizza name 2",
      description: "Pizza Description2.",
    }),
    React.createElement(Pizza, {
      name: "Check Pizza name 3",
      description: "Pizza Description3.",
    }),
    React.createElement(Pizza, {
      name: "Check Pizza name 4",
      description: "Pizza Description4.",
    }),
    React.createElement(Pizza, {
      name: "Check Pizza name 5",
      description: "Pizza Description5.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
