import { Button } from "../App";

export function CartItem({
  image,
  name,
  category,
  price,
  id,
  orderQuantity,
  onAddToCart,
  onDeleteQuantity,
  onDeleteCartItem,
}) {
  return (
    <div className="card mb-3 Cart-Item">
      <div className="row g-0" style={{ height: "100%" }}>
        <div className="col-md-4 Cart-Image-Wrapper">
          <img src={image} className="rounded-start Cart-Image" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{category}</p>
            <p className="text-success mb-2">${orderQuantity * price}</p>
            <h5 className="card-title mb-2" style={{ fontSize: "16px" }}>
              quantity: {orderQuantity}
            </h5>
            <div
              className="d-flex justify-content-between gap-2"
              style={{ width: "100%" }}
            >
              <Button onClick={() => onAddToCart(id)}>Add quantity</Button>
              <Button onClick={() => onDeleteQuantity(id)}>
                Delete 1 quantity
              </Button>
              <Button onClick={() => onDeleteCartItem(id)}>Delete all</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
