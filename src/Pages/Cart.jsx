import { useOutletContext } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { Button } from "../App";

export function Cart() {
  const { cart, showCart, setCart, handleAddToCart, handleClearCart } =
    useOutletContext();
  function handleDeleteQuantity(_id) {
    setCart((cart) =>
      cart.map((i) =>
        i.id === _id
          ? i.orderQty > 1
            ? { ...i, orderQty: i.orderQty - 1 }
            : i
          : i,
      ),
    );
  }
  function handleDeleteCartItem(_id) {
    setCart((cart) => cart.filter((i) => i.id !== _id));
  }
  const cost = cart.reduce(
    (total, element) => total + element.orderQty * element.price,
    0,
  );
  return (
    <>
      <div className="Cart-Buttons">
        {showCart && (
          <div>
            {cart[0] && (
              <Button onClick={() => handleClearCart()}>Clear Cart</Button>
            )}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between">
        {showCart && (
          <div className="container-fluid">
            {cart.map((ele) => (
              <CartItem
                image={ele.product_image}
                name={ele.product_name}
                category={ele.category.name}
                price={ele.price}
                id={ele.id}
                orderQuantity={ele.orderQty}
                key={ele.id}
                onAddToCart={handleAddToCart}
                onDeleteQuantity={handleDeleteQuantity}
                onDeleteCartItem={handleDeleteCartItem}
              />
            ))}
          </div>
        )}
      </div>
      {showCart ? (
        <>
          {cart.length > 0 && (
            <h2 className="Cost">Total cost = ${cost.toFixed(2)}</h2>
          )}
          {cart.length > 0 && <Button>Checkout</Button>}
        </>
      ) : (
        ""
      )}
    </>
  );
}
