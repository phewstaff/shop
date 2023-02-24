const ShopStuff = ({ onAdd, product, productExist }) => {
  return (
    <div className="card">
      <div className="images">
        <img src={product.image} alt="saf" />
      </div>
      <p>{product.name}</p>
      <h5>{product.price} Р</h5>
      <button
        className="add"
        disabled={productExist}
        onClick={() => onAdd(product)}
      >
        {productExist ? "Добавлено" : "Добавить в корзину"}
      </button>
    </div>
  );
};

export default ShopStuff;
