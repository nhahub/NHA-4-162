import { Button } from "../App";

export function Item({ image, name, category, price, id, handleAddToCart }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-3">
      <img
        src={image}
        className=""
        alt="..."
        style={{ height: "230px", width: "80%" }}
      />
      <div className="Item-Data">
        <div className="Item-Text">
          <p className="Item-Category">{category}</p>
          <h5 className="Item-Name">{name}</h5>
        </div>
        <div className="Item-Price-Cart">
          <span className="Item-Price">${price}</span>
          <Button onClick={() => handleAddToCart(id)}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
