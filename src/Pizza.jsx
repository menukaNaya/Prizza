const Pizza = ({ name, description, imgUrl }) => {
  return (
    <div className="pizza">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt="pizz-pic" />
    </div>
  );
};

export default Pizza;
