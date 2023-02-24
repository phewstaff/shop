import ShopStuff from "./ShopStuff";
import { products } from "../Consts";

function HomePage({ onAdd, basket }) {
  return (
    <div className="App-main">
      {products.map((item) => {
        const productExist = basket.find(
          (basketItem) => basketItem.id === item.id
        );
        return (
          <ShopStuff
            productExist={productExist}
            onAdd={onAdd}
            product={item}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
export default HomePage;
