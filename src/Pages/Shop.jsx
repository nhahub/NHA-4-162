import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../App.jsx";

export function Body() {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const { logInDetails } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const showCart = location.pathname === "/shop/cart";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://gemdashboard-production.up.railway.app/api/products",
        );
        const result = await response.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoadingProducts(false);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  function handleShowCart() {
    if (showCart) {
      navigate("/shop");
    } else {
      navigate("/shop/cart");
    }
  }
  function handleClearCart() {
    setCart([]);
  }
  function handleAddToCart(_id) {
    const cartItem = products.find((ele) => ele.id === _id);
    if (cart.find((ele) => ele.id === _id)) {
      setCart((cart) =>
        cart.map((i) =>
          i.id === _id ? { ...i, orderQty: i.orderQty + 1 } : i,
        ),
      );
    } else {
      setCart((cart) => [...cart, { ...cartItem, orderQty: 1 }]);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-end Cart-Buttons">
        <Button onClick={handleShowCart}>
          {showCart ? "Close Cart" : "Show Cart"}
        </Button>
      </div>
      {isLoadingProducts ? (
        <div class="spinner-border text-success" role="status"></div>
      ) : (
        <Outlet
          context={{
            cart,
            setCart,
            showCart,
            handleAddToCart,
            products,
            handleClearCart,
            logInDetails,
          }}
        />
      )}
    </>
  );
}