import { Item } from "./Item.jsx";
import { useOutletContext } from "react-router-dom";

function ShopItems() {
  const { handleAddToCart, products } = useOutletContext();

  return (
    <div className="row m-auto g-3 Items-Container">
      {products.map((ele) => (
        <Item
          image={ele.product_image}
          name={ele.product_name}
          category={ele.category.name}
          price={ele.price}
          id={ele.id}
          handleAddToCart={handleAddToCart}
          key={ele.id}
        />
      ))}
    </div>
  );
}

export default ShopItems;
