const BasketStuff = ({ onRemove, product,  }) => {
  return (
   <div className="card">
   <div className="images">
     <img src={product.image} alt="saf" />
   </div>
   <p>{product.name}</p>
   <h5>{product.price} Р</h5>
   <button className="remove" onClick={() => onRemove(product.id)}>
     Убрать из корзины
   </button>
 </div>
  );
};

export default BasketStuff;
