import BacketStuff from "./BasketStuff";
import React from "react";

function BasketPage({ basket, onRemove }) {
  return (
    <div className="App-main">
      <> {basket.length === 0 && <div>Basket is empty</div>}</>
      {basket.map((item) => {
        return (
          <BacketStuff
            onRemove={onRemove}
            product={item}
            key={item.id}
            basket={basket}
          />
        );
      })}
    </div>
  );
}

export default BasketPage;
